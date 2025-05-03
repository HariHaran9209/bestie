import React, { useEffect, useRef, useState } from 'react'
import Status from './Status'
import { motion } from 'framer-motion'
import './App.css'

const App = () => {
  const [ showMessage, setShowMessage ] = useState(false)
  const [ typedText, setTypedText ] = useState("")
  const [ index, setIndex ] = useState(0)
  const messageRef = useRef(null)



  const message = `First of all, i'm really, honestly, completely, truly sorry..... I know idhellam en thappu dhaan.... Naan romba over-a ponaen just because I wanted to be your best friend. Nee enna enna vena nenachuko—greedy, jealous, egoistic—but the truth is, i was scared, i was just scared that I’ll be replaced… that I don’t matter to you like how much you matter to me.

Even after you told me that you're bestfriend is dharaniya and no one'd ever replace her, i never wanted her to be replaced, she's special for you, and i just wanted to be good enough, like, naanu unnoda oru bestfriend aa irrukanunu expect panne, but i was wrong, you know, oru person special la illayanu neetha decide pannanu, not me, i have no idea why the hell i told like that, that was just so childish and i'll try not to do that again.....  Best friendship mathiri feelings varanum nu solli vara kodathu, adhu natural-a nadakkanum. Forcing is not friendship, and I’m sorry for that. Naan deserve pannala nu naan purinjutaen. 

And second, naan un mela control panna try pannaen nu nee feel pannuna, I’m truly sorry. Honestly, i never wanted to control you, never, did i ever told you to stop texting with any boys. Tamim matter-la I agree, but even then, naan un safety-ku dhaan sonna, not to control you. But still, adhu wrong-a thaan pochu. Unakku oru naal hurt aagidumo nu than naan yosichaen. Aana naan ippo purinjutaen, nee un life-a nee decide pannalaam. I trust you, and I’ll never do anything like that again.

And third, naan un kitta chinna chinna things force panna try pannaen, like ‘bro’ ku badhila ‘da’ nu solla sonnaen. That was immature. Every time nee bro nu sonna, I felt like something was breaking between us. Aana adhu en imagination dhaan. I should’ve respected your way of talking. I’m sorry for that too.

I know naan neraiya thappu pannaen, but everything came from a place of caring and fear......`

  useEffect(() => {
    if (showMessage && index < message.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [showMessage, index]);


  const handlePlay = () => {
    const audio = document.getElementById("bg-music");
    audio.play();
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden flex flex-col items-center justify-center p-6 font-poppins">
      <Status />
      {/* Background Particles/Hearts */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute animate-ping bg-pink-300 rounded-full w-4 h-4 top-[20%] left-[10%] opacity-50"></div>
        <div className="absolute animate-ping bg-purple-300 rounded-full w-5 h-5 top-[40%] left-[70%] opacity-50"></div>
        <div className="absolute animate-ping bg-pink-400 rounded-full w-3 h-3 top-[65%] left-[30%] opacity-50"></div>
        <div className="absolute animate-ping bg-purple-400 rounded-full w-6 h-6 top-[80%] left-[80%] opacity-50"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-pink-700 mb-6 text-center z-10"
      >
        For Someone Who Means The World To Me 💖
      </motion.h1>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handlePlay}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all text-lg z-10"
      >
        Press Me & Read This Message While The Song Plays 🎵
      </motion.button>

      <audio id="bg-music" src="/Still-With-You.mp3" loop />

      {showMessage && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black/40 flex items-center justify-center p-4 z-50"

        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full text-gray-800 overflow-y-auto max-h-[80vh] relative">
            <h2 className="text-xl font-semibold mb-4 text-center text-pink-600">This Is What I Want You To Know 💬</h2>
            <p className="whitespace-pre-line text-base leading-relaxed">
              {typedText}
            </p>
            {typedText.length === message.length && (
              <div className="text-center mt-6 text-pink-500 italic">
                Thank you for reading this. No matter what, you’ll always matter to me.
              </div>
            )}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowMessage(false)}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )

}

export default App
