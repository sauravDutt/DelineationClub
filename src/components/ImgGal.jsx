import {motion} from 'framer-motion';

const ImgGal = () => {

    return(
        <div
            className="img-gallery"
        >
            <div class="column">
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.jpeg')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/two.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/three.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/four.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/yo.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
            </div>
            <div class="column">
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/four.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/three.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/yo.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.jpeg')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/two.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                
            </div>
            <div class="column">
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/two.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.jpeg')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/one.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/three.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/four.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
                <a href="#NFTs"  className="imgImg"><motion.img src={require('../img/yo.png')} alt="This is Img" whileHover={{scale: 1.05}} whileTap={{scale: 0.5}} className="imgImgimg"/></a>
            </div>
        </div>
    );
}

export default ImgGal;