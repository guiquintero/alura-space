import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from './banner.png';
import styles from './PaginaInicial.module.scss';
import Rodape from "../../componentes/Rodape";
import Galeria from "../../componentes/Galeria";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="Imagem da Terra vista do espço" />
                    </div>
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria/>
            </div>
            <Rodape />
            
        </>
    );
}