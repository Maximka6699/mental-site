import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Filter/filterStyles.css';


const Filter = ({type, onClickType, avi, onClickAvi, size, onClickSize, collection, onClickCol}) => {

    const [showContent, setShowContent] = React.useState(false);
    const typeNames = ["Все","Футболки","Штаны","Шорты","Свитеры","Украшения"]
    const aviNames = ["Все","В наличии","Предзаказ"]
    const sizeNames = ["Все","L","M","XL"]
    const collectionNames =["Все", "mental health", "autumn breath", "hot winter"]

    // const [activeFilter, setActiveFilter] = React.useState(0);
    // const [activeFilter2, setActiveFilter2] = React.useState(0);
    // const [activeFilter3, setActiveFilter3] = React.useState(0);
    // const [activeFilterCol, setActiveFilterCol] = React.useState(0);

    // const onClickFilter1 = (index) => {
    //     setActiveFilter(index);
    // }
    // const onClickFilter2 = (index) => {
    //     setActiveFilter2(index);
    // }
    // const onClickFilter3 = (index) => {
    //     setActiveFilter3(index);
    // }
    // const onClickFilterCol = (index) => {
    //     setActiveFilterCol(index);
    // }


    return ( 
      <>
            <div className="filter-content">
            <div className="filter">
            <div className="filter-wrapper">
                <div className="filter-txt">
                    <div onClick={()=>setShowContent(!showContent)} className="filter-opn"><div className="filter-fltr header_link">фильтр</div></div>
                    {/* <div onClick={()=>setShowContent(!showContent)} className="filter-btn header_link">фильтр</div> */}
                    <div
                    onClick={()=>(
                        onClickType(0),
                        onClickAvi(0),
                        onClickSize(0),
                        onClickCol(0)
                        )}
                        className="filter-btn op05 header_link ttt">сбросить</div>
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
                    <p className="filter-title-type">Коллекция:</p>
                    <div className="filter-type">
                        {collectionNames.map((name, i)=>(
                        <p 
                        key={i} 
                        onClick={()=>onClickCol(i)}
                        className={`filter-title-type-s ${collection==i ?'active-filter-section': 'selection-un-line'} `}>
                            {name}
                        </p>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <p className="filter-title-type">Тип:</p>
                    <div className="filter-type">
                        {/* <p onClick={()=>onClickFilter1(0)} className={`filter-title-type-s ${activeFilter==0 ?'active-filter-section': 'selection-un-line'} `}>Все</p>
                        <p onClick={()=>onClickFilter1(1)} className={`filter-title-type-s ${activeFilter==1 ?'active-filter-section': 'selection-un-line'} `}>Футболки</p>
                        <p onClick={()=>onClickFilter1(2)} className={`filter-title-type-s ${activeFilter==2 ?'active-filter-section': 'selection-un-line'} `}>Штаны</p>
                        <p onClick={()=>onClickFilter1(3)} className={`filter-title-type-s ${activeFilter==3 ?'active-filter-section': 'selection-un-line'} `}>Шорты</p>
                        <p onClick={()=>onClickFilter1(4)} className={`filter-title-type-s ${activeFilter==4 ?'active-filter-section': 'selection-un-line'} `}>Свитеры</p>
                        <p onClick={()=>onClickFilter1(5)} className={`filter-title-type-s ${activeFilter==5 ?'active-filter-section': 'selection-un-line'} `}>Украшения</p> */}
                        {typeNames.map((name, i)=>(
                        <p 
                        key={i} 
                        onClick={()=>onClickType(i)}
                        className={`filter-title-type-s ${type==i ?'active-filter-section': 'selection-un-line'} `}>
                            {name}
                        </p>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <p className="filter-title-type">Наличие:</p>
                    <div className="filter-type">
                        {/* <p onClick={()=>onClickFilter2(0)} className={`filter-title-type-s ${activeFilter2==0 ?'active-filter-section': 'selection-un-line'}`}>Все</p>
                        <p onClick={()=>onClickFilter2(1)} className={`filter-title-type-s ${activeFilter2==1 ?'active-filter-section': 'selection-un-line'}`}>В наличии</p>
                        <p onClick={()=>onClickFilter2(2)} className={`filter-title-type-s ${activeFilter2==2 ?'active-filter-section': 'selection-un-line'}`}>Предзаказ</p> */}
                        {aviNames.map((name, i)=>(
                        <p 
                        key={i} 
                        onClick={()=>onClickAvi(i)}
                        className={`filter-title-type-s ${avi==i ?'active-filter-section': 'selection-un-line'} `}>
                            {name}
                        </p>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <p className="filter-title-type">Размер:</p>
                    <div className="filter-type">
                        {/* <p className="filter-title-type-s active-filter-section">Все</p>
                        <p className="filter-title-type-s selection-un-line">L</p>
                        <p className="filter-title-type-s selection-un-line">M</p>
                        <p className="filter-title-type-s selection-un-line">XL</p> */}
                    {/* {sizeNames.map((name, i)=>(
                        <p key={i} className="filter-title-type-s selection-un-line">{name}</p>
                        ))} */}
                        {sizeNames.map((name, i)=>(
                        <p 
                        key={i} 
                        onClick={()=>onClickSize(i)}
                        className={`filter-title-type-s ${size==i ?'active-filter-section': 'selection-un-line'} `}>
                            {name}
                        </p>
                        ))}
                    </div>
                    <div onClick={()=>setShowContent(!showContent)} className="filter-title-type selection-un-line op05">закрыть фильтр</div>
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


