
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import logo from '../../assets/img/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title = "Bantul Projotamansari Blended Learning"
    const slogan = "Tujuan utama pendidikan bukanlah pengetahuan, tetapi tindakan."
    const copyright = "2021 Bantul Projotamansari Blended Learning - Didukung oleh Geschool"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title={title}
                slogan={slogan}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;