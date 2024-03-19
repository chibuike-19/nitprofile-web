import Image from "next/image"
import { StaticImageData } from "next/image"

import { useState, useEffect } from "react"

interface Data {
    data: {
        img: StaticImageData
        text: string
    }[]
}

const ImageCarounsel = ({ data }: Data) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const changeImage = setInterval(() => {
            setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
        }, 5000)
        return () => clearInterval(changeImage)
    }, [currentIndex, data.length])

    return (
        <div className="main-container">
            {data.map((item, index) => (
                <div key={index} className="carousel-img-container">
                    <Image
                        src={item.img}
                        alt={item.text}
                        className={currentIndex === index ? "active" : ""}
                        style={{
                            display: currentIndex === index ? "flex" : "none",
                            height: "100vh",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}
            <div className="progress-container">
                {data.map((item, index) => (
                    <p
                        className="progress-indicator"
                        style={{ backgroundColor: currentIndex == index ? "#2dad00" : "white" , borderColor: "white"}}
                    ></p>
                ))}
            </div>
        </div>
    )
}

export default ImageCarounsel
