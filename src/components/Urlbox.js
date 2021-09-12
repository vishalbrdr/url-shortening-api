import { useState } from 'react'
import axios from 'axios';
import { Tween } from 'react-gsap';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Urlbox() {

    const [input, setInput] = useState('')
    const [link, setLink] = useState([{ originalLink: 'https://github.com/vishalbrdr', shortenLink: 'https://9qr.de/d4UTvs' }])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleInputClick() {
        document.querySelector(".url-form-input").classList.remove("red-outline")
        setError("")
    }
    function handleInputChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (input === "") {
            setError("please add a link")
            document.querySelector(".url-form-input").classList.add("red-outline")
            return
        }
        const pattern = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-]*)?\??(?:[-+=&;%@.\w]*)#?\w*)?)/gm
        );
        let isValidURL = !!pattern.test(input);
        if (isValidURL !== true) {
            setError('enter a valid link');
            document.querySelector(".url-form-input").classList.add("red-outline")
            return isValidURL
        } else {
            document.querySelector(".url-form-input").classList.remove("red-outline")
            const formatStr = input.toString().toLowerCase().trim()
            setLoading(true)
            getLink(formatStr)
            setError('');
            setInput("")
        }
    }
    function handleCopy(e) {
        e.target.classList.add("copy")
        e.target.innerText = "Copied!"
        setTimeout(() => {
            e.target.classList.remove("copy")
            e.target.innerText = "Copy"
        }, 5000)
    }
    async function getLink(longUrl) {
        try {
            axios
                .get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
                .then((responseData) => {
                    console.log(`${responseData.data.result.full_short_link2} from response`);
                    const originalLink = longUrl
                    const shortenLink = responseData.data.result.full_short_link2
                    console.log(shortenLink);
                    setLink([{ originalLink, shortenLink }, ...link])
                    setLoading(false)
                })
                .catch((err) => {
                    alert('Error check your connectivity ' + err)
                    setLoading(false)
                })
        } catch (e) {
            console.error(`${e} During fetching the Links`);
        }
    }


    return (
        <div className="urlbox-container">
            <div className="url-form">
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <input className="url-form-input" type="text" onClick={handleInputClick} value={input} placeholder="Shorten a link here..." onChange={handleInputChange} />
                    <button className={loading ? 'cta rounded-sm loading' : "cta rounded-sm"} type="submit" >
                        {loading ? 'loading' : "Shorten It!"}
                    </button>
                </form>
                {error &&
                    <Tween from={{ scale: 0 }} ease="elastic" duration={1}>
                        <p className="error-message">{error}</p>
                    </Tween>
                }
            </div>
            {link && link.map((eachLink, i) =>
                <Tween key={i} from={{opacity: 0}} ease="elastic" duration={5}>
                    <div className="url-container">
                        <p className="original_link">{eachLink.originalLink}</p>
                        <p className="short_link" >{eachLink.shortenLink}</p>
                        <CopyToClipboard text={eachLink.shortenLink} >
                            <button className="rounded-sm cta" onClick={handleCopy}>Copy</button>
                        </CopyToClipboard>
                    </div>
                </Tween>
            )}
        </div>
    )
}
