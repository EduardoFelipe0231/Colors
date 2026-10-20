import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const Colors = ({item}) => {

    const copyToClipboardHex = () => {
          navigator.clipboard.writeText(`${item.hex}`)
          .then(() => 
            {toast(`Copied to clipboard`)}
        )

    }

    const copyToClipboardRgb = () => {
          navigator.clipboard.writeText(`${item.rgb}`)
          .then(() => 
            {toast(`Copied to clipboard`)}
        )

    }

    const copyToClipboardHsl = () => {
          navigator.clipboard.writeText(`${item.hsl}`)
          .then(() => 
            {toast(`Copied to clipboard`)}
        )

    }

    return(
        <div>
            <div className="bg-zinc-100 px-6 py-2 text-sm flex flex-col items-center justify-center gap-3 rounded-2xl md:flex-row lg:gap-5 lg:items-center">
                <div className="flex items-center justify-center gap-3 py-6">
                    <span className="text-zinc-900">HEX</span>
                    <button onClick={copyToClipboardHex} className="text-zinc-500 cursor-pointer">{item.hex}</button>
                </div>
                <div className="border border-zinc-300 w-full md:w-4 "></div>
                <div className="flex items-center gap-2 py-6">
                    <span className="text-zinc-900">RGB</span>
                    <button onClick={copyToClipboardRgb} className="text-zinc-500 cursor-pointer">{item.rgb}</button>
                </div>
                <div className="border border-zinc-300 w-full md:w-4 "></div>
                <div className="flex items-center gap-2 py-6">
                    <span className="text-zinc-900">HSL</span>
                    <button onClick={copyToClipboardHsl} className="text-zinc-500 cursor-pointer">{item.hsl}</button>
                </div>            
            </div>
        <h3 className="text-sm text-center mt-4 text-zinc-500">click to copy the color in the desired format</h3>
        </div>
    )
}

export default Colors;