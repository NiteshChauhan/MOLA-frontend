import { useState } from "react"
import ModalVideo from 'react-modal-video'

export default function VideoBox() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* To play video set isOpen to true */}
            <a onClick={() => setOpen(false)} className="lightbox-image"><i className="icon-play" /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
