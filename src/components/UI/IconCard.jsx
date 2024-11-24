import '@styles/IconCard.css';
import { motion } from 'framer-motion';

const IconCard = ({icon,backgroundColor,borderRadius,width,height,variation}) => {
  return (
    <motion.div style={{backgroundColor:`${backgroundColor}`, borderRadius:`${borderRadius}px`,width:`${width}px`, height:`${height}px`}} className='IconCardContainer' variants={variation} initial="initial" whileInView="animate" viewport={{once:true,amount:0.6}}>
        <img src={icon} alt="" />
    </motion.div>
  )
}

export default IconCard