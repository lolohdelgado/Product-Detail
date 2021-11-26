import ProductImage from './ProductImage/ProductImage';
import SelectColor from './SelectColor/SelectColor';
import FeaturesBtn from './FeaturesBtns/FeaturesBtn';
import ScreenFeatures from './ScreenFeatures/ScreenFeatures';
import { useState } from 'react';

const ProductDetail = ({title, description, colorOptions}) => {
    const watchColorOptions = colorOptions; // todo
    const [selectedColor, changeSelectedColor] = useState(0);
    const [selectedFeature, changeSeletedFeature] = useState('hour');

    return (
        <div className='product-detail'>
            <div className='image-container'>
                <ProductImage currentWatch={watchColorOptions[selectedColor]} />
                <ScreenFeatures selectedFeature={selectedFeature}/>
            </div>
            <div className='description-container'>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <SelectColor changeSelectedColor={changeSelectedColor} watchColorOptions={watchColorOptions} selectedColor={selectedColor}/>
                <FeaturesBtn changeSeletedFeature={changeSeletedFeature} selectedFeature={selectedFeature}/>
                <button className='buy-button' type='button'>Buy Now</button>  
            </div>              
        </div>
    )
}

export default ProductDetail;
