const SelectColor = ({watchColorOptions, changeSelectedColor, selectedColor}) => {
    
    return (
        <div className='differentColors'>
            <h2>Select Color</h2>
            {watchColorOptions.map(({ imageUrl, styleName }, index) => (
                <button onClick={() => changeSelectedColor(index)} key={index} className={selectedColor === index ? 'color-selected' : ''}>
                    <img src={imageUrl} alt={styleName}/>
                </button>
            ))} 
        </div>
    )
}

export default SelectColor;
