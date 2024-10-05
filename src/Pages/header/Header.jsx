import { Link } from 'react-router-dom'
import style from '../header/Header.module.css'



function Header(){

    return(
        <div className={style.container}>
            <div>
                <Link className={style.link} to={'/home'}>
                <img  className={style.img} src={"https://s3-alpha-sig.figma.com/img/a288/d23c/5fbd875768a7655114ddca093d3eb9d2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDHJ7DrUIbGatqNaD3fU6p-r7eELXm-Q1y~~z6Nn6mPkIXeohL~szVWECyKxunJ564hioolxMg5DxCQ~cF6H68e5t1ekzx0onThwPkbt1PjM2eCCvM0gZfOvDxdS2AIX0ehEvUdedkMskJm32g0TaCPTsjUVUnxJmsbjcDgHo1i0parPdDlv6V54hc8mhTFbLyXNHu3JTh0AY97tu6uPzZLTDGH2~EGzyUERENX1IFP6dv-8OmbuTf0PoYK~JjmWMmv4Qo2dTwA3iwfQoro4Y76Bjc2WQfh63PrOe7ZkaMWjMdTrS9Xex0xmNpxEVrsWyQd80R7tcPwPkuUFJJzViA__"}/>
                </Link>
                
            </div>
            <div className={style.navigate}>
                <Link className={style.link}to={'/home'}> <p>Home</p> </Link>
                <Link className={style.link} to={'/progresso'}> <p>Progresso</p> </Link>
                <Link className={style.link} to={'/'}>  <p>Configuração</p>
                </Link>
               

            </div>
        </div>
    )
}

export default Header