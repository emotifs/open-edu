import React from 'react';
import hackaton from '../images/projects/hackaton.jpg'
import flex from '../images/projects/flex.jpg';
import qvz from '../images/projects/qvz.jpg';
import ioi from '../images/projects/ioi.jpg';
import newuzb from '../images/projects/newuzb.jpg';
import xalq from '../images/projects/xalq.png';
import Fade from 'react-reveal/Fade';

function OppoList() {
    return (
        <div className="oppo-list">
            

             <Fade left>
                <div className="oppo-card">
                    <img src={flex} className="oppo-img" alt="#"/>
                    <div>
                    <h2>Future Leaders Exchange Program</h2>
                    <p>FLEX dasturi: Maktab, litsey va kollej oʻquvchilari uchun AQSHda 1 yil davomida oʻqish imkoniyati; oʻqish davomida barcha xarajatlar qoplanadi!</p>
                    <a href="https://www.discoverflex.org/" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
            </Fade>
           
            <Fade right>
                <div className="oppo-card">
                    <img src={hackaton} className="oppo-img" alt="#"/>
                    <div>
                    <h2>DG Hackathon</h2>
                    <p>Mustaqilligimizning 30 yilligiga bag'ishlab "Digital Generation Uzbekistan" Nodavlat Notijorat Muassasasi tomonidan Respublika miqyosida katta hackathonlarga start beradi!</p>
                    <a href="https://hackathon.digitalgeneration.uz/" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
            </Fade>
       
            <Fade left>
                <div className="oppo-card">
                    <img src={xalq} className="oppo-img" alt="#"/>
                    <div>
                    <h2>Xalq ta'lim vazirligi</h2>
                    <p>Xalq taʼlimi tizimida har haftaning shanba kuni “Xalq qabuli kuni” deb eʼlon qilindi</p>
                    <a href="https://www.uzedu.uz/oz/halk-talimi-tizimida-ar-aftaning-sanba-kuni-halk-kabuli-kuni-deb-elon-kilindi" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
            </Fade>

            <Fade right>
                <div className="oppo-card">
                    <img src={qvz} className="oppo-img" alt="#"/>
                    <div>
                    <h2>QVZ</h2>
                    <p>Umumta’lim maktablari o‘quvchilari o‘rtasida “Quvnoqlar va zukkolar” ko‘rik-tanlovini tashkil etish va o‘tkazish bo‘yicha tashkiliy qo‘mita majlisi bayoni</p>
                    <a href="https://www.uzedu.uz/oz/qvz-2019-bayoni" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
             </Fade>
       
           
             <Fade left>
                <div className="oppo-card">
                    <img src={ioi} className="oppo-img" alt="#"/>
                    <div>
                    <h2>International Olympiad in Informatics</h2>
                    <p>Informatika bo'yicha 32 -Xalqaro Olimpiada (IOI 2020) Singapurda 2020 yil 13-19 sentyabr kunlari bo'lib o'tdi. Bu butun dunyo bo'ylab o'rta maktab va litsey o'quvchilari uchun kompyuter fanlari bo'yicha eng nufuzli musobaqa. Tanlov har yili o'tkaziladigan beshta xalqaro fan olimpiadalaridan biridir.</p>
                    <a href="https://ioinformatics.org/" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
            </Fade>
           
            <Fade right>
                <div className="oppo-card">
                    <img src={newuzb} className="oppo-img" alt="#"/>
                    <div>
                    <h2>Yangi O'zbekiston Universiteti</h2>
                    <p>yetakchi universitet sifatida biz jamiyat va insoniyatga xizmat qilish uchun eng yaxshi ta'lim, tadqiqot va innovatsiyalar orqali global bilim va uning amaliy yondashuvini olg'a suramiz</p>
                    <a href="https://newuzbekistanuniversity.uz" className="btn btn-warning">Ko'proq</a>
                    </div>
                </div>
            </Fade>     
          
       
        </div>
    )
}

export default OppoList
