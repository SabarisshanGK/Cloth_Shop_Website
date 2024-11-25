import { IconCard } from '@components/UI'
import '@styles/HomePage.css'
import { getImageURL } from '@utils/image-utils'
import { motion } from 'framer-motion'

const HomePage = () => {

    const slideUpVariation = {
      initial:{
        opacity:0,
        scale:0.3,
        y:100
      },
      animate:{
        opacity:1,
        scale:1,
        y:0,
        transition:{
          delay:0.3,
          duration:2
        }
      }
    }
    const slideLeft = {
      initial:{
        opacity:0,
        x:-100
      },
      animate:{
        opacity:1,
        x:0,
        transition:{
          delay: 0.3,
          duration:1
        }
      }
    }
    const slideRight = {
      initial:{
        opacity:0,
        x:100
      },
      animate:{
        opacity:1,
        x:0,
        transition:{
          delay: 1.3,
          duration:1
        }
      }
    }

    const fadeInVariation = {
      initial:{
        opacity:0,
        scale:0.8
      },
      animate:{
        opacity:1,
        scale:1,
        transition:{
          delay: 2.3,
          duration:1
        }
      }
    }
    

    return (
    <div className='homepage-container'>
      {/* Section 1 */}
      <div className="homepage-section1">
        <div className="homepage-section1-content">
          <div className="homepage-section1-content-left-side">
            <h2 className='homepage-section1-text-1'>ON</h2>
            <h2 className='homepage-section1-text-2'>Every</h2>
            <h2 className='homepage-section1-text-1'>PURCHASE GET</h2>
          </div>
          <div className="homepage-section1-content-right-side">
            <svg width="201" height="248" viewBox="0 0 201 248" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7402 40.1719L29.167 40.2354C31.8753 40.193 34.1393 39.5371 35.959 38.2676C37.821 36.9557 39.2598 35.263 40.2754 33.1895C41.291 31.0736 41.9046 28.7673 42.1162 26.2705C42.2855 24.4508 42.222 22.5889 41.9258 20.6846C41.6719 18.7803 40.9948 17.151 39.8945 15.7969C38.7943 14.4427 37.1227 13.7445 34.8799 13.7021C32.6794 13.7021 30.8385 14.2946 29.3574 15.4795C27.9186 16.6644 26.776 18.1667 25.9297 19.9863C25.1257 21.7637 24.5544 23.5833 24.2158 25.4453L8.34668 25.5088C8.72754 20.6846 10.1452 16.347 12.5996 12.4961C15.054 8.60286 18.249 5.55599 22.1846 3.35547C26.1624 1.11263 30.6481 0.0546875 35.6416 0.181641C40.6774 0.266276 44.9515 1.45117 48.4639 3.73633C51.9762 5.97917 54.5788 9.0472 56.2715 12.9404C58.0065 16.7913 58.7048 21.1924 58.3662 26.1436C58.1123 29.6559 57.2236 32.8509 55.7002 35.7285C54.2191 38.6061 52.2513 41.0817 49.7969 43.1553C47.3848 45.1865 44.613 46.7734 41.4814 47.916C38.3923 49.0163 35.1549 49.5664 31.7695 49.5664L20.2803 49.5029L21.7402 40.1719ZM19.6455 53.502L21.1055 44.3613L30.8809 44.4248C34.4355 44.5094 37.6094 45.0807 40.4023 46.1387C43.2376 47.1966 45.6286 48.7201 47.5752 50.709C49.5218 52.6979 50.9395 55.11 51.8281 57.9453C52.7168 60.7806 53.0342 64.0179 52.7803 67.6572C52.484 71.6351 51.5319 75.3379 49.9238 78.7656C48.3581 82.1934 46.2422 85.1556 43.5762 87.6523C40.9525 90.1491 37.8844 92.0745 34.3721 93.4287C30.902 94.7829 27.1146 95.4176 23.0098 95.333C19.2012 95.2061 15.8369 94.4443 12.917 93.0479C10.0394 91.6514 7.64844 89.7471 5.74414 87.335C3.88216 84.9229 2.50684 82.1299 1.61816 78.9561C0.729492 75.7822 0.327474 72.3968 0.412109 68.7998L16.2178 68.8633C16.1755 70.7253 16.3447 72.6296 16.7256 74.5762C17.1488 76.5228 17.974 78.1732 19.2012 79.5273C20.4284 80.8815 22.1846 81.5798 24.4697 81.6221C27.1357 81.7067 29.3574 81.0719 31.1348 79.7178C32.9121 78.3213 34.2874 76.5228 35.2607 74.3223C36.2764 72.0794 36.9111 69.7943 37.165 67.4668C37.3766 65.1816 37.3132 63.0234 36.9746 60.9922C36.6361 58.9186 35.8109 57.2048 34.499 55.8506C33.1872 54.4541 31.2194 53.6924 28.5957 53.5654L19.6455 53.502ZM121.335 39.8545L118.986 55.4062C118.309 59.8073 117.315 64.3564 116.003 69.0537C114.691 73.751 112.85 78.1309 110.48 82.1934C108.111 86.2135 105.064 89.4508 101.34 91.9053C97.6582 94.3174 93.0879 95.4388 87.6289 95.2695C83.4818 95.1849 80.054 94.2751 77.3457 92.54C74.6797 90.7627 72.585 88.4564 71.0615 85.6211C69.5804 82.7435 68.5436 79.5908 67.9512 76.1631C67.401 72.693 67.1471 69.1807 67.1895 65.626C67.2318 62.029 67.4645 58.6436 67.8877 55.4697L70.2363 39.8545C70.8711 35.4535 71.8444 30.9255 73.1562 26.2705C74.5104 21.5732 76.3724 17.2357 78.7422 13.2578C81.112 9.23763 84.1589 6.04264 87.8828 3.67285C91.6491 1.26074 96.2406 0.139323 101.657 0.308594C105.762 0.393229 109.147 1.32422 111.813 3.10156C114.522 4.83659 116.617 7.10059 118.098 9.89355C119.621 12.6865 120.658 15.7969 121.208 19.2246C121.8 22.6523 122.076 26.1647 122.033 29.7617C121.991 33.3164 121.758 36.6807 121.335 39.8545ZM102.863 57.8184L105.783 37.3154C105.952 36.2575 106.143 34.7764 106.354 32.8721C106.566 30.9678 106.714 28.9577 106.799 26.8418C106.883 24.6836 106.757 22.6523 106.418 20.748C106.079 18.8014 105.424 17.1722 104.45 15.8604C103.477 14.5485 102.038 13.8503 100.134 13.7656C97.4255 13.5964 95.2249 14.3581 93.5322 16.0508C91.8818 17.7435 90.57 19.9017 89.5967 22.5254C88.6234 25.1491 87.904 27.8363 87.4385 30.5869C86.973 33.2952 86.6133 35.5592 86.3594 37.3789L83.4395 57.8184C83.3125 58.8763 83.1221 60.3574 82.8682 62.2617C82.6566 64.166 82.5085 66.2184 82.4238 68.4189C82.3815 70.5771 82.5085 72.6507 82.8047 74.6396C83.1009 76.6286 83.7357 78.279 84.709 79.5908C85.6823 80.9027 87.1211 81.6221 89.0254 81.749C91.7337 81.9606 93.9342 81.1989 95.627 79.4639C97.362 77.7288 98.695 75.5283 99.626 72.8623C100.557 70.154 101.255 67.4245 101.721 64.6738C102.229 61.9232 102.609 59.638 102.863 57.8184ZM136.696 24.2393L137.204 19.415C137.543 15.9873 138.452 12.8135 139.934 9.89355C141.457 6.93132 143.509 4.56152 146.091 2.78418C148.715 1.00684 151.888 0.139323 155.612 0.181641C159.167 0.266276 162.066 1.23958 164.309 3.10156C166.594 4.92122 168.223 7.26986 169.196 10.1475C170.17 13.0251 170.55 16.0931 170.339 19.3516L169.958 24.2393C169.619 27.5824 168.688 30.735 167.165 33.6973C165.684 36.6172 163.61 38.9658 160.944 40.7432C158.321 42.4782 155.21 43.3245 151.613 43.2822C148.059 43.1976 145.139 42.2454 142.854 40.4258C140.568 38.6061 138.918 36.2575 137.902 33.3799C136.929 30.5023 136.527 27.4554 136.696 24.2393ZM147.932 19.3516L147.487 24.4297C147.403 25.4876 147.424 26.736 147.551 28.1748C147.678 29.6136 148.08 30.8408 148.757 31.8564C149.434 32.8298 150.513 33.3587 151.994 33.4434C153.56 33.4857 154.829 32.999 155.803 31.9834C156.818 30.9678 157.58 29.7617 158.088 28.3652C158.638 26.9264 158.998 25.5511 159.167 24.2393L159.738 19.2881C159.823 18.1455 159.781 16.876 159.611 15.4795C159.484 14.083 159.104 12.8346 158.469 11.7344C157.834 10.6341 156.755 10.084 155.231 10.084C153.623 10.0417 152.312 10.5283 151.296 11.5439C150.28 12.5596 149.497 13.7868 148.947 15.2256C148.439 16.6644 148.101 18.0397 147.932 19.3516ZM163.356 76.2266L163.801 71.3389C164.097 67.9958 165.007 64.8643 166.53 61.9443C168.054 58.9821 170.127 56.6123 172.751 54.835C175.375 53.0153 178.527 52.1478 182.209 52.2324C185.764 52.3171 188.662 53.2904 190.905 55.1523C193.148 56.972 194.756 59.3206 195.729 62.1982C196.745 65.0758 197.147 68.1227 196.936 71.3389L196.491 76.2266C196.153 79.612 195.243 82.7858 193.762 85.748C192.281 88.668 190.228 91.0166 187.604 92.7939C184.981 94.5713 181.849 95.4176 178.21 95.333C174.613 95.2484 171.693 94.2962 169.45 92.4766C167.207 90.6569 165.578 88.3083 164.562 85.4307C163.547 82.5107 163.145 79.4427 163.356 76.2266ZM174.528 71.3389L173.957 76.3535C173.915 77.4961 173.978 78.7445 174.147 80.0986C174.317 81.4528 174.74 82.68 175.417 83.7803C176.094 84.8805 177.131 85.4518 178.527 85.4941C180.22 85.5365 181.553 85.071 182.526 84.0977C183.542 83.1243 184.304 81.9183 184.812 80.4795C185.319 78.9984 185.637 77.6019 185.764 76.29L186.335 71.3389C186.42 70.2386 186.398 68.9691 186.271 67.5303C186.145 66.0492 185.764 64.7796 185.129 63.7217C184.494 62.6637 183.394 62.1348 181.828 62.1348C180.262 62.0924 178.951 62.5579 177.893 63.5312C176.877 64.5046 176.094 65.7318 175.544 67.2129C175.036 68.6517 174.698 70.027 174.528 71.3389ZM194.65 15.416L145.773 86.8906L138.22 81.749L187.033 10.2109L194.65 15.416ZM70.2998 192.426L67.8877 207.914C67.126 213.077 65.8141 218.049 63.9521 222.831C62.1325 227.571 59.6992 231.802 56.6523 235.526C53.6478 239.25 49.9661 242.17 45.6074 244.286C41.2487 246.402 36.1917 247.396 30.4365 247.27C24.9352 247.143 20.3438 245.937 16.6621 243.651C13.0228 241.366 10.1875 238.362 8.15625 234.638C6.16732 230.871 4.87663 226.682 4.28418 222.069C3.73405 217.457 3.75521 212.759 4.34766 207.978L6.69629 192.489C7.50033 187.326 8.81217 182.333 10.6318 177.509C12.4515 172.685 14.8848 168.347 17.9316 164.496C21.0208 160.645 24.766 157.619 29.167 155.419C33.568 153.176 38.6673 152.139 44.4648 152.309C50.0508 152.436 54.6423 153.684 58.2393 156.054C61.8786 158.424 64.6927 161.555 66.6816 165.448C68.6706 169.299 69.9189 173.573 70.4268 178.271C70.9346 182.925 70.8923 187.644 70.2998 192.426ZM51.5107 207.978L53.7959 192.172C54.1344 189.844 54.346 187.263 54.4307 184.428C54.5576 181.55 54.346 178.778 53.7959 176.112C53.2881 173.446 52.209 171.225 50.5586 169.447C48.9505 167.67 46.5173 166.718 43.2588 166.591C39.7464 166.422 36.7842 167.12 34.3721 168.686C32.0023 170.251 30.0557 172.346 28.5322 174.97C27.0511 177.593 25.8874 180.429 25.041 183.476C24.237 186.522 23.6234 189.464 23.2002 192.299L20.915 208.041C20.6188 210.368 20.4072 212.95 20.2803 215.785C20.1956 218.62 20.4495 221.329 21.042 223.91C21.6344 226.449 22.7347 228.586 24.3428 230.321C25.9932 232.014 28.4264 232.924 31.6426 233.051C35.1126 233.22 38.0326 232.564 40.4023 231.083C42.7721 229.56 44.6976 227.549 46.1787 225.053C47.6598 222.514 48.8024 219.742 49.6064 216.737C50.4528 213.733 51.0876 210.813 51.5107 207.978ZM107.814 153.578L91.8184 246H75.251L91.1836 153.578H107.814ZM129.523 193.378L127.048 207.533H94.3574L96.8965 193.378H129.523ZM140.251 153.578L137.712 167.797H101.276L103.752 153.578H140.251ZM167.99 153.578L151.994 246H135.427L151.359 153.578H167.99ZM189.699 193.378L187.224 207.533H154.533L157.072 193.378H189.699ZM200.427 153.578L197.888 167.797H161.452L163.928 153.578H200.427Z" fill="#DE1B41"/>
            </svg>
          </div>
        </div>
        <div className="homepage-section-1-address">
          <img src={getImageURL('../assets/images/LocationIcon.png')} alt="Image of location icon" />
          <div className="homepage-section-1-address-content">
            <span className="homepage-section-1-address-content-text-1">No 23, Dert Street, Fest Town, Hall City,</span>
            <span className="homepage-section-1-address-content-text-2">Gerty</span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="homepage-section2">
        <div className="homepage-section-2-content">
          <div className="homepage-section-2-content-section">
            <IconCard backgroundColor="#FFDDE4"  variation={slideUpVariation} borderRadius={20} width={150} height={150} icon={getImageURL("../assets/images/homeSection2Icon1.png")}/>
            <h4 className='homepage-section-2-content-section-title'>Quality Product</h4>
            <p className="homepage-section-2-content-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="homepage-section-2-content-section">
          <IconCard backgroundColor="#FFDDE4" borderRadius={20} width={150} height={150} icon={getImageURL("../assets/images/HomeSection2Image2.png")}  variation={slideUpVariation}/>
            <h4 className='homepage-section-2-content-section-title'>Best Price</h4>
            <p className="homepage-section-2-content-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="homepage-section-2-content-section">
            <IconCard backgroundColor="#FFDDE4" borderRadius={20} width={150} height={150} icon={getImageURL("../assets/images/HomeSection2Image3.png")} variation={slideUpVariation}/>
            <h4 className='homepage-section-2-content-section-title'>24/7 Support</h4>
            <p className="homepage-section-2-content-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="homepage-section3">
        <div className="homepage-section3-content">
          <div className="homepage-section3-content-left-side">
            <motion.img src={getImageURL('../assets/images/HomePageSection3Image1.png')} alt="" className='homePage-section3-left-image-1' variants={slideLeft} initial="initial" whileInView="animate" viewport={{once:true,amount:0.6}}/>
            <motion.img src={getImageURL('../assets/images/HomePageSection3Image2.png')} alt="" className='homePage-section3-left-image-2' variants={slideRight} initial="initial" whileInView="animate" viewport={{once:true,amount:0.6}}/>
            <motion.div className="homepage-section-3-info-card" variants={fadeInVariation} initial="initial" whileInView="animate" viewport={{once:true,amount:0.6}}>
              <p className="homepage-section-3-info-card-number">34</p>
              <p className="homepage-section-3-info-card-description">Years Experience</p>
            </motion.div>
          </div>
          <div className="homepage-section3-content-right-side">
            <h2 className='homepage-section3-subtitle'>Who We Are</h2>
            <h1 className="homepage-section3-title">The best solution for garment needs</h1>
            <p className="homepage-section3-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet gravida quis duis tellus ultrices donec sollicitudin nisl.</p>
            <div className="homepage-section-3-list">
              <div className="hompage-section-3-list-item">
                <div className="hompage-section-3-list-item-circle"></div>
                <span className="hompage-section-3-list-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
              <div className="hompage-section-3-list-item">
                <div className="hompage-section-3-list-item-circle"></div>
                <span className="hompage-section-3-list-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
              <div className="hompage-section-3-list-item">
                <div className="hompage-section-3-list-item-circle"></div>
                <span className="hompage-section-3-list-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
              <div className="hompage-section-3-list-item">
                <div className="hompage-section-3-list-item-circle"></div>
                <span className="hompage-section-3-list-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
              <div className="hompage-section-3-list-item">
                <div className="hompage-section-3-list-item-circle"></div>
                <span className="hompage-section-3-list-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage