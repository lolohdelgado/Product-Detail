const ProductImage = ({currentWatch}) => (
    <div className='productImage'>
        <img src={currentWatch.imageUrl} alt={currentWatch.styleName}/>
    </div>
);

export default ProductImage;
