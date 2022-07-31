// This is my Major Project

import './index.css';
import {motion} from 'framer-motion';
import ImgGal from './components/ImgGal';
import Game from './components/Game';
import {AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import {ethers} from 'ethers'
import Modal from './components/Modal/index';
import Mint from './components/Mint';
import MintNft from './components/MintNft';

function App() {

  const [modelOpen, setModalOpen] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  

  const connectWallet = () => {
    if(window.ethereum) {
      // matamask is there I Think
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result =>{
        accountChangedHandler(result[0])
      })
    }else {
      console.log('INSTALL MATAMASK')
    }
  }
  
  const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

  const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			console.log(error.message);
		});
	};

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
          onClick={connectWallet}
        >
          <p><span className="card-logo"><i class="fa-brands fa-ethereum"></i> | <span className="logoCard">Delineation</span></span><span className="wallet"><i class="fa-solid fa-wallet"></i></span></p>
        
          <p className="walletContent"><span className='keyTitle'>MataMask Public Key </span><span className="publicKey">{defaultAccount}</span><br/><span className="walletBalance"><i class="fa-brands fa-ethereum"></i> {userBalance}</span></p>
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
