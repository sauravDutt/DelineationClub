import {motion} from 'framer-motion';
import Backdrop from '../Backdrop';

const dropIn = {

    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 10,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },

}



const Modal = ({handleClose}) => {

    return (
        <Backdrop onClick={handleClose}>

            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='modal'
                variants={dropIn}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
            >
                <h2 className='infoTitle'>info</h2>
                <p className='infoParagraph'>
                <mark>Delineation.club</mark>, is a decentralized, secure, web 3.0 application, Provide members a variety of  utilities, such as NFT minting platform, followed by a secure Crypto (Ethereum) exchange (or transfer) system with minimal Gas Fee.
                <br />
                <span className='verySmall'>*** (4th May 2022), 21000 is the minimum amount of gas an operation on Ethereum will use. This limit is used to guarantee that the transaction will be executed.</span>
                </p>
                <motion.button className='closeBtnModal' whileHover={{scale: 1.1}} whileTap={{scale: 0.5}} onClick={handleClose}>close</motion.button>
            </motion.div>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className='modalTwo'
                    variants={dropIn}
                    initial = "hidden"
                    animate = "visible"
                    exit= "exit"
                >
                    <h2 className='infoTitle'>Win</h2>
                    <p className="randomWin">
                    <mark>A Random DelineationClub NFT</mark>
                    </p>
                    <p className='infoParagraphTwo'>
                    To win a random DelineationClub NFT, you first havto to follow us on instagram and DM us the answer to the following equation,<br /> <span className='equation'>ax²+bx+c=0</span><br /> Find the value of "x". Also join our Discord, click on the arrow button below to see our vision.
                    </p>
                    <p className='social'>
                        <a className="socialIcon"  href='https://www.instagram.com/delineation.club/' target='_blank' rel="noreferrer"><i class="fa-brands fa-instagram"></i></a> <a className="socialIcon" href='https://discord.gg/74DwfZgZ'><i class="fa-brands fa-discord"></i></a><a className="socialIcon"  href="https://opensea.io/Delineation"  target='blank/'><i class="fa-solid fa-store"></i></a> <a className="socialIcon" href="https://vision.delineation.club/" target='blank/'><i class="fa-solid fa-location-arrow"></i></a>
                    </p>
                </motion.div>
                
        </Backdrop>
    );

}



export default Modal;