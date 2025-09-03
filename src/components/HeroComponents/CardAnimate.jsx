import { useEffect } from 'react'

const CardAnimate =() => {
    
    
    useEffect(() => {
        const hack = (s) => document.getElementById(s)
        const ImgContainer = hack("ImgContainer")
        const apple = hack("appleImg")
        const info = hack("infoApple")
        const cTitle = hack("cTitle")
        const cPrice = hack("cPrice")
        const spanPrice = hack("spanPrice")
        const benefits = hack("benefits")
        const ulBenefits = hack("ulBenefits")
        const cBtn = hack("cBtn")
        const combo = {
            containerAnimate: ImgContainer,
            appleAnimate: apple,
            infoApple: info,
            cTitle: cTitle,
            cPrice: cPrice,
            spanPrice: spanPrice,
            benefits: benefits,
            ulBenefits: ulBenefits,
            cBtn: cBtn,
        }
        let val = 0
        let val1 = 0
        for (const [key, nodo] of Object.entries(combo)) {
            val1 += 500
            nodo?.classList.remove(key)
        }
        for (const [key, nodo] of Object.entries(combo)) {
            val += 500
            setTimeout(() => {
                nodo?.classList.add(key)
            }, val)
        }
    }, [])


    return (
        <div
            className='w-[60%] h-[90%] bg-white/80 rounded-4xl flex shadow-xl z-0 border-4 border-green-200'
        >
            <div id='ImgContainer' className='w-[40%] transition duration-75 z-2'>
                <img
                    src ='/images/apple.png'
                    id='appleImg'
                    className='w-24 transition duration-150'
                    alt='Apple'
                    aria-label='apple'
                />
            </div>
            <div id='infoApple' className='w-[60%]'>
                <h2 id='cTitle' className='Title'>Green Apples</h2>
                <p id='cPrice'>
                    Price: <span id='spanPrice'>$4</span><small>USD</small>
                </p>
                <p id='benefits'>BENEFITS</p>
                <ul id='ulBenefits'>
                    <li>Boost heart health</li>
                    <li>May support whight management</li>
                    <li>Could be good for your heart</li>
                </ul>
                <button type='button' id='cBtn'>
                   <svg
    stroke='currentColor'
    fill='currentColor'
    stroke-width='0'
    version='1.2'
    baseProfile='tiny'
    viewBox='0 0 24 24'
    height='1.5em'
    width='1.5em'
    class='inline'
>
    <g>
        <path
            d='M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z'
        ></path>
        <circle cx='8.5' cy='19.5' r='1.5'></circle>
        <circle cx='17.5' cy='19.5' r='1.5'></circle>
    </g>
</svg>
 Add to cart
                </button>
            </div>
        </div>
    )
}

export default CardAnimate