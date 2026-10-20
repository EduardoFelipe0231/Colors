import Colors from './colors'

const Layout = ({item}) => {
    return(
        //usar a cor via props, que vem do data.js é setado por "item.color"
        // no data.js usar "color": 'bg-red-300'
        <div className={`${item.color} flex flex-col items-center justify-center min-h-screen w-screens font-semibold text-4xl gap-3 lg:text-5xl `}>
            <h1 className="tracking-wider">{item.name.toUpperCase()}</h1>
            <p className="text-sm">{item.text} {item.name.toLowerCase()}</p>
            <Colors item={item} />
        </div>
    )
}

export default Layout;