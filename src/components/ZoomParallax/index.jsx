import styles from './styles.module.scss';
import Picture1 from '../../../public/images/meme1.png';
import Picture2 from '../../../public/images/meme2.png';
import Picture3 from '../../../public/images/meme3.png';
import Picture4 from '../../../public/images/meme4.png';
import Picture5 from '../../../public/images/meme5.png';
import Picture6 from '../../../public/images/meme6.png';
import Picture7 from '../../../public/images/meme7.png';
import Picture8 from '../../../public/images/meme8.png';
import Picture9 from '../../../public/images/meme9.png';
import Picture10 from '../../../public/images/meme10.png';
import Picture11 from '../../../public/images/meme11.png';
import Picture12 from '../../../public/images/meme12.png';
import Picture13 from '../../../public/images/meme13.png';
import Picture14 from '../../../public/images/meme14.png';
import Picture15 from '../../../public/images/meme15.png';
import Picture16 from '../../../public/images/meme16.png';
import Picture17 from '../../../public/images/meme17.png';
import Picture18 from '../../../public/images/meme18.png';
import Picture19 from '../../../public/images/meme19.png';
import Picture20 from '../../../public/images/meme20.png';
import Picture21 from '../../../public/images/meme21.png';
import Picture22 from '../../../public/images/meme22.png';
import Picture23 from '../../../public/images/meme23.png';
import Picture24 from '../../../public/images/meme24.png';
import Picture25 from '../../../public/images/meme25.png';
import Picture26 from '../../../public/images/meme26.png';
import Picture27 from '../../../public/images/meme27.png';
import Picture28 from '../../../public/images/meme28.png';
import Picture29 from '../../../public/images/meme29.png';
import Picture30 from '../../../public/images/meme30.png';
import Picture31 from '../../../public/images/meme31.png';
import Picture32 from '../../../public/images/meme32.png';

import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useMemo, useRef } from 'react';

function randomizePictures() {
    // Array containing Picture2 to Picture32
    let pictures = [
        Picture2, Picture3, Picture4, Picture5, Picture6, Picture7,
        Picture8, Picture9, Picture10, Picture11, Picture12, Picture13,
        Picture14, Picture15, Picture16, Picture17, Picture18, Picture19,
        Picture20, Picture21, Picture22, Picture23, Picture24, Picture25,
        Picture26, Picture27, Picture28, Picture29, Picture30, Picture31,
        Picture32
    ];

    // Fisher-Yates Shuffle
    for (let i = pictures.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }

    return pictures;
}

const word = "MEET THE FAMILY";


export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [4, 1]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [5, 1]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [6, 1]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [8, 1]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [9, 1]);

    const randomOrderPictures = randomizePictures()

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale5
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale6
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale5
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale6
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale8
        },
        {
            src: randomOrderPictures[Math.floor(Math.random() * randomOrderPictures.length)],
            scale: scale9
        }
    ]

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const letterOffset = [useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]),useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25])]

    return (
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt='image' placeholder='blur' />
                  {src === Picture1 && (
                    <div className={styles.pContainer}>
                        <p>
                        {word.split('').map((letter, i) => {
                            // const y = useTransform(scrollYProgress, [1, 0], [0, Math.floor(Math.random() * -75) - 25]);
                            return (
                            <motion.span style={{ top: letterOffset[i] }} key={`l_${i}`}>
                                {letter}
                            </motion.span>
                            );
                        })}
                        </p>
                        
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className={styles.text}>

        </div>
      </div>
    );
}
