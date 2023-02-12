import React, {useState} from 'react';
import s from './styles.module.scss';
import DeliveryMethodSelector from "./Selectors/DeliveryMethodSelector";

const ProductDescription = ({state}) => {
    const colors = [
        {id: 1, color: '#0F0F0F'},
        {id: 2, color: '#323231'},
        {id: 3, color: '#666662'},
        {id: 4, color: '#0F0F0F'},
        {id: 5, color: '#323231'},
        {id: 6, color: 'white'},
    ]
    const sizes = [
        {id: 7, size: 'S'},
        {id: 8, size: 'M'},
        {id: 9, size: 'L'},
        {id: 10, size: 'XL'},
        {id: 11, size: 'XXL'},
    ]
    const options = [
        {id: 1, option: 'Почта России'},
        {id: 2, option: 'Постомат'},
        {id: 3, option: 'CDEK'},
        {id: 4, option: 'Пункт выдачи'},
    ]
    const [color, setColor] = useState(0)
    const [size, setSize] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null);
    const desc = "Худи изготовлен из высококачественного толстого хлопка 400 г / м. Высококачественная, изготовленная по специальной трафаретной печати, не потускнеет и не сотрется со временем. Велюровый кант на внутренней поверхности воротника предназначен для стирания. Состав материала: 80% хлопок / 20% Эластан"
    const returnedData = () => {
        if (state.description) {
            return (
                <>
                    <div className={`${s.productDescriptionContainer} ${s.productDescriptionStyle}`}>

                        <div className={`${s.productNamePriceContainer}`}>
                            <p className={s.name}>Худи HUGO Regular Fit</p>
                            <p className={s.price}>14 000 руб</p>
                        </div>
                        <div className={s.productFullDescriptionContainer}>
                            <p className={s.descriptionLabel}>Описание:</p>
                            <p className={s.descriptionFullText}>{desc}</p>

                        </div>
                        <div className={s.navigateButtonContainer}>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </>
            )
        } else if (state.video) {
            return (
                <>
                    <div className={s.productDescriptionContainer}>

                        <div className={s.productNamePriceContainer}>
                            <p className={s.name}>Худи HUGO Regular Fit</p>
                            <p className={s.price}>14 000 руб</p>
                        </div>
                        <div className={s.productFullDescriptionContainer}>
                            <p className={s.descriptionLabel}>Описание:</p>
                            <p className={s.descriptionFullText}>{desc.slice(0, 200)}...</p>
                        </div>
                        <div className={s.productVideoContainer}>
                            <iframe
                                src="https://www.youtube.com/embed/u31qwQUeGuM" title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                            </iframe>
                        </div>
                        <div className={s.navigateButtonContainer}>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </>
            )
        } else if (state.buy) {
            return (
                <>
                    <div className={s.productDescriptionContainer}>

                        <div className={s.productNamePriceContainer}>
                            <p className={s.name}>Худи HUGO Regular Fit</p>
                        </div>
                        <div className={s.productFullDescriptionContainer}>
                            <p className={s.descriptionLabel}>Цвет:</p>
                            <div className={s.colorsContainer}>
                                {colors.map((el, index) => <div key={el.id} className={color === index + 1 ? s.colorElementActive : s.colorElement}
                                                                onClick={() => setColor(el.id)} style={{right: `${(index * 8)}px`}}>
                                    <p className={s.colorPicker} style={{backgroundColor: `${el.color}`}}></p></div>)}
                            </div>
                        </div>
                        <div className={s.productSizeContainer}>
                            <p>Размер:</p>
                            <div className={s.sizes}>
                                {sizes.map(
                                    el => <p className={el.size === size ? s.productSizeActive : s.productSize}
                                             onClick={() => setSize(el.size)}>{el.size}</p>)}
                            </div>
                        </div>
                        <div className={s.deliveryMethodContainer}>
                            <DeliveryMethodSelector options={options} setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
                        </div>
                        <div className={s.navigateButtonContainer}>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            {returnedData()}
        </>
    );
};

export default ProductDescription;
