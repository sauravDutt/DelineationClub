import './index.css';
import {motion} from 'framer-motion';
import ImgGal from './components/ImgGal';
import Game from './components/Game';
import {AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import Modal from './components/Modal/index';
import Mint from './components/Mint';
import MintNft from './components/MintNft';

function App() {

  const [modelOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  


  return (
    <div className="App">
      <header>
      <motion.button 
              whileHover={{scale: 1.3}}
              whileTap={{scale: 0.5}}
              className="logo"
              onClick={() => null}
          >
            Delineation<span className='secondText'>.club</span>
          </motion.button>
          <motion.button 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.5}}
              className="navBtn"
              onClick={() => (modelOpen ? close() : open() )}
  
          >
              info
          </motion.button>
      </header>
      <AnimatePresence
        initial = {false}
        exitBeforeEnter = {true}
        onExitComplete={() => null}
      >
        {modelOpen && <Modal modelOpen = {modelOpen} handleClose={close}/>}
      </AnimatePresence>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ImgGal/>
      <div className='outterProject'>
        <motion.div 
              className="activityDiv"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.91}}
              onClick={() => (modelOpen ? close() : open() )}
        >
          
          <Game/> 
        </motion.div>
        <motion.div 
          className='activityDiv'
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.91}}
        >
          <Mint /> 
        </motion.div>
      </div>
      <div className="outter-minting">
        <div className='userSinginMessage'>
          <p className='userSinginMessageText'>
            To Mint or transfer Crypto you first have to connect your MataMask wallet to the application,
            click on the <i class="fa-solid fa-wallet"></i> icon to connect.
          </p>
        </div>
        <motion.div 
          className="cardMatamask"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.91}}
        >
          <p><span className="card-logo"><i class="fa-brands fa-ethereum"></i> | <span className="logoCard">Delineation</span></span><span className="wallet"><i class="fa-solid fa-wallet"></i></span></p>
        </motion.div>
      </div>
      <div className='realMintOutter'>
      <motion.div 
              className="activityDivNFT"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.91}}
        >
          
          <MintNft />
        </motion.div>
        <div className='nftPopDiscription'>
          <p>
            To Mint a Unique Delineation.club NFT at the floor price of <i class="fa-brands fa-ethereum"></i><strong> 0.08 ETH</strong>, click on the<strong> Mint </strong>button. The app will generate a new Unique NFT, by combining random layers of original illustrated art.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
