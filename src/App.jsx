import React, { useEffect, useRef, useState } from 'react'
import Status from './Status'
import { motion } from 'framer-motion'
import './App.css'

const App = () => {
  const [ showMessage, setShowMessage ] = useState(false)
  const [ showPromiseBox, setShowPromiseBox ] = useState(false)
  const [ typedText, setTypedText ] = useState("")
  const [ index, setIndex ] = useState(0)
  const [ typingSpeed, setTypingSpeed ] = useState(25)
  const [ showFullMessage, setShowFullMessage ] = useState(false)
  const messageRef = useRef(null)

  const [promises, setPromises] = useState({
    neverIgnore: false,
    stayInTouch: false,
    beHonest: false,
    forgiveMe: false,
    tellMe: false,
  });

  const message = `First of all, i'm really, honestly, completely, truly sorry..... I know idhellam en thappu dhaan.... Naan romba over-a ponaen just because I wanted to be your best friend. Nee enna enna vena nenachuko—greedy, jealous, egoistic—but the truth is, i was scared, i was just scared that I’ll be replaced… that I don’t matter to you like how much you matter to me.

Even after you told me that you're bestfriend is dharaniya and no one'd ever replace her, i never wanted her to be replaced, she's special for you, and i just wanted to be good enough, like, naanu unnoda oru bestfriend aa irrukanunu expect panne, but i was wrong, you know, oru person special la illayanu neetha decide pannanu, not me, i have no idea why the hell i told like that, that was just so childish and i'll try not to do that again.....  Best friendship mathiri feelings varanum nu solli vara kodathu, adhu natural-a nadakkanum. Forcing is not friendship, and I’m sorry for that. Naan deserve pannala nu naan purinjutaen. 

And second, naan un mela control panna try pannaen nu nee feel pannuna, I’m truly sorry. Honestly, i never wanted to control you, never, did i ever told you to stop texting with any boys. Tamim matter-la I agree, but even then, naan un safety-ku dhaan sonna, not to control you. But still, adhu wrong-a thaan pochu. Unakku oru naal hurt aagidumo nu than naan yosichaen. Aana naan ippo purinjutaen, nee un life-a nee decide pannalaam. I trust you, and I’ll never do anything like that again.

And third, naan un kitta chinna chinna things force panna try pannaen, like ‘bro’ ku badhila ‘da’ nu solla sonnaen. That was immature. Every time nee bro nu sonna, I felt like something was breaking between us. Aana adhu en imagination dhaan. I should’ve respected your way of talking. I’m sorry for that too.

I know naan neraiya thappu pannaen, but everything came from a place of caring and fear.....

And You can take your time, I truly respect your decision to study instead of wasting your time on me, I'd do that too but, i just wanted things to normal between us again, that's it..... just old eniya sri and new hari haran.... I'm damn sure that you'll see the changes in me, so let's just be back, like the old times, you take the time you want, not to distance from me, but for your studies.....`;

useEffect(() => {
  if (showMessage && index < message.length && !showFullMessage) {
    const timeout = setTimeout(() => {
      setTypedText((prev) => prev + message[index]);
      setIndex(index + 1);
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }
}, [showMessage, index, typingSpeed, showFullMessage]);



  const handlePlay = () => {
    const audio = document.getElementById("bg-music");
    audio.play();
    setShowMessage(true);
    setShowPromiseBox(true); // moved here properly
  };

  const allPromisesChecked =
    promises.neverIgnore &&
    promises.stayInTouch &&
    promises.beHonest &&
    promises.forgiveMe;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden flex flex-col items-center justify-center p-6 font-poppins">
      <Status />
      {/* Background Decorations */}
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

      <audio id="bg-music" src="/friendship_song.mp3" loop />

      {showMessage && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black/40 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full text-gray-800 overflow-y-auto max-h-[80vh] relative">
            <h2 className="text-xl font-semibold mb-4 text-center text-pink-600">This Is What I Want You To Know 💬</h2>
            <div className="flex justify-center gap-4 mb-4">
  {[{ label: '1x', speed: 25 }, { label: '1.5x', speed: 15 }, { label: '2x', speed: 8 }].map(({ label, speed }) => (
    <button
      key={label}
      onClick={() => setTypingSpeed(speed)}
      className={`px-3 py-1 rounded-full border ${
        typingSpeed === speed
          ? 'bg-pink-500 text-white border-pink-600'
          : 'bg-white text-pink-600 border-pink-400 hover:bg-pink-100'
      } transition-all duration-200 text-sm font-medium`}
    >
      {label}
    </button>
  ))}
  <button
    onClick={() => {
      setShowFullMessage(true);
      setTypedText(message);
      setIndex(message.length);
    }}
    className="px-4 py-1 rounded-full bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-all"
  >
    Show Full Message
  </button> 
</div>


            <p className="whitespace-pre-line text-base leading-relaxed">{typedText}</p>
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

      {showPromiseBox && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-white shadow-xl rounded-xl p-6 mt-10 w-full max-w-md z-10"
        >
          <h2 className="text-lg font-semibold text-center text-purple-700 mb-4">Can you promise me these? 😅</h2>
          <div className="space-y-4">
  {[
    { label: "Never ignore me without telling why", key: "neverIgnore" },
    { label: "Stay in touch even when busy", key: "stayInTouch" },
    { label: "Be honest even if it's harsh", key: "beHonest" },
    { label: "Forgive me if I mess up sometimes 😔", key: "forgiveMe" },
    { label: "Don't hide because i maybe hurt, tell me the truth", key: "tellMe" }
  ].map(({ label, key }) => (
    <label key={key} className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={promises[key]}
          onChange={() => setPromises(prev => ({ ...prev, [key]: !prev[key] }))}
          className="peer hidden"
        />
        <div className="w-6 h-6 rounded-full border-2 border-pink-400 peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center transition duration-300">
          <svg
            className="w-4 h-4 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-gray-800 text-base hover:text-pink-600 transition-all duration-200">{label}</span>
    </label>
  ))}
</div>


          {allPromisesChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-center text-green-600 font-semibold"
            >
              🥹 Thank you for promising! You just made my day 💗
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default App
