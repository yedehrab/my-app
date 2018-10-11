import React, {Component} from 'react';

/**
 * Body 
 * 
 * * *Önce constructor ardından render çalışır.*
 * * *Üst componentten aktarılan veriler probs içine gelir (teacherName)*
 */
class Body extends Component {
    // Parent'tan veri alırken constructer içine props yazılması lazım.
    constructor(props) {
        // Super yazılmadan çalışmaz
        super(props);

        this.state = {
            state: 'gecici'
        };
    }

    // Render edildikten sonra çalışır. 2. render'ı çalıştırır.
    componentDidMount() {
        this.setState({
            temp: 'geçti'
        });

        this.functionEx();
    }

    // Fonksiyon yapısı
    functionEx = () => {
        this.setState({
            state: 'geçti',
            currentState: "geçmedi"
        });
    };

    // Asenkton fonksiyon yapısı
    async functionAsync() {
        // this.state durumu bitmeden (callback yapmadan) atama işlemi gerçekleşmez.
        const tempData = await this.state;
    }

    // Ekrana gönderilen kısım
    render() {
        return (
            // Div yazılması gerekmektedir.
            <div> 
                <p> Hocam  {this.props.teacherName}, {this.state.state} aaaaa </p>
            </div>
        );
    }

}

export default Body;