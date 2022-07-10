import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import { ButtonStyled } from '../../components/todo/ListCurrentStyles';
import { DivTodoStyled, InputTodoStyled } from '../../components/todo/TodoListStyles';
import { ListContext } from '../../context/todoListContext';
import pokeball from '../../assets/pokeAPI/pokeball-img.png'
import { DivContainerHomeStyled, ButtonDownloadStyled, DivStyled, LinkStyled, DeleteStyled, LinkContainer } from './homeStyles';
import { addList, deleteList, deleteNoteForTitle } from '../../actions/noteActions';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
  const  { list }  = useSelector(state => state.list)
  const dispatch = useDispatch()

  const [newTitle, setNewTitle] = useState("")

  const { setTitle, listTitle, setListTitle } = useContext(ListContext)

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.log("oops, no prompt event guardado en window");
      return;
    }

    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  const handleCreateList = (e) => {
    e.preventDefault()

    if (newTitle !== "") {
      setListTitle(listTitle);
      setTitle(newTitle);
      setHomeVisible(true)
      dispatch(addList(newTitle))
    }
    setInputVisible(false)
    setNewTitle("");

    setTimeout(()=> {
      navigate("/note");
    }, 500)
  }

  const handleDelete = (listnote) => {
    dispatch(deleteNoteForTitle(listnote.newTitle))
    dispatch(deleteList(listnote.id))
  }


  return (
    <DivContainerHomeStyled className={homeVisible && "hidden"}>
      <LinkContainer>
        {isReadyForInstall && (
          <ButtonDownloadStyled onClick={downloadApp}>
            Instalar App
          </ButtonDownloadStyled>
        )}

        <Link to={"/pokedex"}>
          <img style={{ width: "60px" }} src={pokeball} alt="" />
        </Link>
      </LinkContainer>

      <motion.h1
        animate={{
          x: [-600, 8, -5, 0],
          rotateY: [0, 34, 0],
        }}
      >
        misNotas
      </motion.h1>

      <DivTodoStyled onSubmit={handleCreateList}>
        {inputVisible && (
          <motion.div
            className="container-div"
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              ease: "easeOut",
              duration: 1.5,
              type: "spring",
            }}
          >
            <InputTodoStyled
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Crear una lista..."
            />
            <ButtonStyled type="submit">
              <FaPlus />
            </ButtonStyled>
          </motion.div>
        )}

        <DivStyled>
          {list?.map((listnote) => {
            return (
              <div
                key={uuidv4()}
                style={{ display: "flex", alignItems: "center" }}
              >
                <LinkStyled
                  className="container-list"
                  key={uuidv4()}
                  onClick={() => setTitle(listnote.newTitle)}
                  to={`/note`}
                >
                  {listnote.newTitle}
                </LinkStyled>
                <ButtonStyled
                  dark
                  deleted
                  onClick={() => handleDelete(listnote)}
                >
                  <DeleteStyled />
                </ButtonStyled>
              </div>
            );
          })}
        </DivStyled>

        {!inputVisible && (
          <motion.button
            onClick={() => setInputVisible(true)}
            className="button-add"
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
            }}
          >
            AGREGAR LISTA
          </motion.button>
        )}
      </DivTodoStyled>
    </DivContainerHomeStyled>
  );
}

export default Home