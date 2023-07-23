import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Filter/filterStyles.css';


const Filter = () => {

    const [showContent, setShowContent] = React.useState(false);
    const typeNames = ["Все","Футболки","Штаны","Шорты","Свитеры","Украшения"]
    const aviNames = ["Все","В наличии","Предзаказ"]
    const sizeNames = ["Все","L","M","XL"]


    return ( 
      <>
            <div className="filter-content">
            <div className="filter">
            <div className="filter-wrapper">
                <div onClick={()=>setShowContent(!showContent)} className="filter-txt ttt">
                    <div className="filter-btn header_link">фильтр</div>
                    <div className="filter-btn op05 header_link">сбросить</div>
                </div>                
            </div>
            {/* АНИМАЦИЯ РАЗВЕРТКИ ФИЛЬТРОВ  */}
            <CSSTransition
                in={showContent}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
            <div className="filter-body">

                <div className="filter-section">
                    <p className="filter-title-type">Тип:</p>
                    <div className="filter-type">
                        {typeNames.map((name, i)=>(
                        <p key={i} className="filter-title-type-s selection-un-line">{name}</p>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <p className="filter-title-type">Наличие:</p>
                    <div className="filter-type">
                    {aviNames.map((name, i)=>(
                        <p key={i} className="filter-title-type-s selection-un-line">{name}</p>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <p className="filter-title-type">Размер:</p>
                    <div className="filter-type">
                    {sizeNames.map((name, i)=>(
                        <p key={i} className="filter-title-type-s selection-un-line">{name}</p>
                        ))}
                    </div>
                    <div className="filter-title-type selection-un-line op05">закрыть фильтр</div>
                </div>

            </div>
            </CSSTransition>
            {/* АНИМАЦИЯ РАЗВЕРТКИ ФИЛЬТРОВ  */}

            </div>
            </div>
        </>  
     );
}
 
export default Filter;


