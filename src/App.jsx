import Layout from "./components/layout"
import { getData } from "./data/data"
import { Mouse } from "lucide-react"
import { ToastContainer, toast, Bounce, Zoom} from 'react-toastify';

function App() {
  const data = getData()

  const contextClass = {
    success: "bg-emerald-50 border border-emerald-700 text-emerald-900 font-zinc-200",
    error: "bg-rose-100 border border-red-700 text-red-800",
    info: "bg-cyan-50 border border-teal-700 text-teal-900",
    warning: "bg-amber-50 border border-yellow-750 text-yellow-950",
    default: "bg-zinc-900 border border-zinc-800 text-zinc-100",
    dark: "bg-zinc-900 border border-zinc-900 text-zinc-900",
  };
  return (    
    <div className="relative">
      <div className="fixed bottom-10 left-0 right-0 grid place-items-center animate-bounce transition-all">
        <h3 className="text-zinc-900 text-sm md:text-lg">Scroll</h3>
        <button 
              className=" bg-zinc-900/70 p-3 rounded-full text-zinc-100 cursor-pointer w-10 h-10 flex items-center justify-center lg:w-13 lg:h-10 ">
                <Mouse width={40} height={40}/>
            </button>
      </div>
      
      {data.map((item) => (
        <Layout key={item.id} item={item} />
      ))}

      


      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex px-9 min-h-13 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
        }
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
        />
    </div>
  )
}

export default App
