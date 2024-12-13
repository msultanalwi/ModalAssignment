import React, {useState} from "react"
import {View, ScrollView} from "react-native"
import Header from "./components/Header"
import First from "./components/First"



const App = () => {
// 1
  const [onShow, setOnShow] = useState(false)
  const [logout, setLogout] = useState(false)
  const [onDetail, setOnDetail] = useState(false)
  const [data, setData] = useState ([
    {
      id: 1, 
      title: "Michael J. Huddleston", description:"Michael J. Huddleston is a leading figure in trading education, known for his unique approach to understanding and mastering the markets. He aims to make these advanced trading techniques, known as ICT trading, accessible to beginners and experienced traders.",
      avatar: "https://i.ibb.co.com/R385GVf/ICT.jpg", 
      fill: "Michael J. Huddleston emerged in the trading world in the early 2000s. ICT, short for Inner Circle Trader, was born from his fervent desire to share knowledge and experience with those aspiring to enhance their trading skills. ICT’s approach is grounded in fundamental pillars that have revolutionized trading perception. Huddleston introduced advanced technical analysis concepts that transcend typical indicators. He urged traders to study market movements, identify key support and resistance levels, and decipher the collective psychology of market participants. ICT emphasizes prudent risk and emotion management. Huddleston underscored the importance of establishing robust trading plans, defining appropriate stop-loss levels, and mastering emotional reactions, all vital for consistent performance." },
    {
      id: 2 ,
      title: "Timothy Ronald",
      description: "Nama dia Timothy Ronald, panggilannya Moti. Lahir di Tangerang, 22 September 2000.",
      avatar: "https://i.ibb.co.com/3NyyZxj/nolan.jpg" ,
      fill: "Timothy diketahui gemar bermain game sejak masih di Sekolah Menengah Pertama (SMP).Hal tersebut ia manfaatkan dengan baik, hingga berhasil menjadi pemain kedua terbaik dalam turnamen Mobile Legends di Indonesia dan memperoleh hadiah berupa uang tunai.Karena merasa masih belum puas dengan hadiah yang didapatkan, Timothy juga menawarkan jasa joki game untuk memainkan akun orang lain yang ingin menaikkan level atau peringkat di sebuah game.Dari jasa joki tersebut, Timothy memperoleh penghasilan sekitar Rp800 ribu-1 juta.Kemudian, Timothy mulai memasuki dunia bisnis ketika masih berada di bangku Sekolah Menengah Atas (SMA).Saat itu, ia berbisnis dengan menjual pomade (minyak rambut) impor yang sedang populer digunakan di kalangan pria.",

    }
    
  ])
  
  const handlerShow = () => {
    setOnShow(!onShow)
    
  }

  const handlerLogout = () => {
    setLogout(!logout)
  }

  const handlerOnDetail = () => {
    setOnDetail(!onDetail)
  }

  return (
    <ScrollView>
    <View>
      <Header show={handlerShow} logout={handlerLogout} />
      {data.map((value, index )=> (
        <First key={index} list={onShow} detailList={onDetail} onDetail={handlerOnDetail}
        namePerson={value.title}
        sourceImage={value.avatar}
        biography={value.description}
        content={value.fill}
      />
      ))}
      

      {/* 2 */}
      {/* <First list={onShow} detailList={onDetail} onDetail={handlerOnDetail}
        namePerson={"Timothy Ronald"}
        sourceImage={require("./Image/nolan.jpeg")}
        biography={"Nama dia Timothy Ronald, panggilannya Moti. Lahir di Tangerang, 22 September 2000."}
        content={"Timothy diketahui gemar bermain game sejak masih di Sekolah Menengah Pertama (SMP).Hal tersebut ia manfaatkan dengan baik, hingga berhasil menjadi pemain kedua terbaik dalam turnamen Mobile Legends di Indonesia dan memperoleh hadiah berupa uang tunai.Karena merasa masih belum puas dengan hadiah yang didapatkan, Timothy juga menawarkan jasa joki game untuk memainkan akun orang lain yang ingin menaikkan level atau peringkat di sebuah game.Dari jasa joki tersebut, Timothy memperoleh penghasilan sekitar Rp800 ribu-1 juta.Kemudian, Timothy mulai memasuki dunia bisnis ketika masih berada di bangku Sekolah Menengah Atas (SMA).Saat itu, ia berbisnis dengan menjual pomade (minyak rambut) impor yang sedang populer digunakan di kalangan pria."}
      /> */}

      {/* 3 */}
      {/* <First list={onShow} detailList={onDetail} onDetail={handlerOnDetail}
        namePerson={"Satoshi Nakamoto"}
        sourceImage={require("./Image/btc.jpeg")}
        biography={"Satoshi Nakamoto is the presumed pseudonym used by the person (or persons) who helped develop the first Bitcoin software and introduced the concept of cryptocurrency to the general public via the paper “Bitcoin: A Peer-to-Peer Electronic Cash System” (2008)"}
        content={"Satoshi Nakamoto is the pseudonym for the individual or group who created Bitcoin, the world's first cryptocurrency, and the blockchain technology behind it. In 2008, Satoshi published the Bitcoin whitepaper, outlining a peer-to-peer electronic cash system without intermediaries like banks. Bitcoin was officially launched in 2009. To this day, Satoshi Nakamoto's true identity remains unknown."} /> */}

      {/* 4 */}
      {/* <First list={onShow} detailList={onDetail} onDetail={handlerOnDetail}
        namePerson={"William Delbert Gann"}
        sourceImage={require("./Image/gann.jpeg")}
        biography={"Gann was born on June 6, 1878, in Lufkin, Texas. His father was a cotton farmer. He started trading in 1902 when he was 24. He was believed to be a great student of the Bible, who believed that it was the greatest book ever written. He was also a 33rd degree Freemason of the Scottish Rite Order, to which some have attributed his knowledge of ancient mathematics, though he was also known to have studied the ancient Greek and Egyptian cultures."}
        content={"Gann's students have stated that he left a fortune of $50 million (equivalent to $569 million in 2023) that he built by following his methods, but evidence of such a fortune is lacking."} /> */}

      {/* 5 */}
      {/* <First list={onShow} detailList={onDetail} onDetail={handlerOnDetail}
        namePerson={"George Soros"}
        sourceImage={require("./Image/george.jpeg")}
        biography={"George Soros (born August 12, 1930, Budapest, Hungary) is a Hungarian-born American financier, author, philanthropist, and activist whose success as an investor made him one of the wealthiest men in the world. He is also known as a powerful and influential supporter of liberal social causes."}
        content={"Legendary investor known for his success in generating huge profits through his trading strategies. Soros rose to global fame after “breaking into the Bank of England” in 1992, making a profit of more than $1 billion in one day by exploiting the devaluation of the pound sterling. He is the founder of Soros Fund Management and has a reputation as a smart trader with a contrarian approach to financial markets"} /> */}
        
    </View>
    </ScrollView>
  )
}

export default App