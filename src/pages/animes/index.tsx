import Head from 'next/head';
import { Header } from '../../components/Header';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

export default function Animes() {
    return (
        <div>
          <Head>
            <title>Cineanim - Inicio</title>
          </Head> 
          <section className={styles.banner}> 
            <Header/>
              
              <Swiper 
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{ delay: 10000}}  
                slidesPerView={1} 
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }} 
                className={styles.swiper}
              > 
                  <SwiperSlide>
                    
                      <video  className={styles.video} autoPlay loop muted>
                        <source src="https://cineanim.s3.amazonaws.com/slide01.mp4" type="video/mp4"/>
                      </video> 

                      <div className={`${styles.slide_content} container`}>
                        <h1>Rise Of Shield Hero</h1>
                        <div className={styles.anime_detail}>
                          <div className={styles.anime_item}>
                              <span>TV</span>
                          </div>
                          <div className={styles.anime_item}>
                              <span>24m</span>
                          </div>
                          <div className={styles.anime_item}>
                              <span>2019</span>
                          </div> 
                          
                          <div className={styles.anime_tag_quality}>
                              <span>FULLHD</span>
                          </div>

                          <div className={styles.anime_tag_dub}>
                              <span>LEG</span>
                          </div>
                        </div>
                        <p>
                          Os Quatro Heróis Cardeais são um grupo de homens comuns do Japão moderno convocados ao reino de Melromarc para se tornarem seus salvadores. Melromarc é um país atormentado pelas Ondas da Catástrofe que repetidamente devastaram a terra e trouxeram desastres para seus cidadãos durante séculos
                        </p> 

                        <div className={styles.buttons}>
                          <button className="primary">Assistir agora</button>
                          <button className="secondary">Detalhes</button>
                        </div>
                    </div>
                    
                    <div className={styles.overlay}></div>
                  </SwiperSlide> 

                  <SwiperSlide>
                    
                      <video  className={styles.video} autoPlay loop muted>
                        <source src="https://cineanim.s3.amazonaws.com/slide02.mp4" type="video/mp4"/>
                      </video> 

                      <div className={`${styles.slide_content} container`}>
                        <h1>Jujutsu Kaisen</h1>
                        <div className={styles.anime_detail}>
                          <div className={styles.anime_item}>
                              <span>TV</span>
                          </div>
                          <div className={styles.anime_item}>
                              <span>24m</span>
                          </div>
                          <div className={styles.anime_item}>
                              <span>2021</span>
                          </div> 
                          
                          <div className={styles.anime_tag_quality}>
                              <span>FULLHD</span>
                          </div>

                          <div className={styles.anime_tag_dub}>
                              <span>LEG</span>
                          </div>
                        </div>
                        <p>
                          Preguiçosamente se entregando a atividades paranormais infundadas com o Clube Ocultista, o estudante do ensino médio Yuuji Itadori passa seus dias na sala do clube ou no hospital, onde visita seu avô acamado.
                        </p> 

                        <div className={styles.buttons}>
                          <button className="primary">Assistir agora</button>
                          <button className="secondary">Detalhes</button>
                        </div>
                    </div>
                    
                    <div className={styles.overlay}></div>
                  </SwiperSlide> 

                  <SwiperSlide>
                    
                    <video  className={styles.video} autoPlay loop muted>
                      <source src="https://cineanim.s3.amazonaws.com/slide03.mp4" type="video/mp4"/>
                    </video> 

                    <div className={`${styles.slide_content} container`}>
                      <h1>Sword Art Online: Alicization - War of Underworld</h1>
                      <div className={styles.anime_detail}>
                        <div className={styles.anime_item}>
                            <span>TV</span>
                        </div>
                        <div className={styles.anime_item}>
                            <span>24m</span>
                        </div>
                        <div className={styles.anime_item}>
                            <span>2020</span>
                        </div> 
                        
                        <div className={styles.anime_tag_quality}>
                            <span>FULLHD</span>
                        </div>

                        <div className={styles.anime_tag_dub}>
                            <span>LEG</span>
                        </div>
                      </div>
                      <p>
                        Apesar da derrota de Quinella - o pontífice da Igreja Axiom - as coisas ainda não pareciam se acalmar. Ao entrar em contato com o mundo real, Kazuto Kirigaya descobre que a tartaruga do oceano - um mega-flutuador controlado por Rath - foi invadida. 
                      </p> 

                      <div className={styles.buttons}>
                        <button className="primary">Assistir agora</button>
                        <button className="secondary">Detalhes</button>
                      </div>
                  </div>
                  
                  <div className={styles.overlay}></div>
                </SwiperSlide> 

                <SwiperSlide>
                    
                    <video  className={styles.video} autoPlay loop muted>
                      <source src="https://cineanim.s3.amazonaws.com/slide04.mp4" type="video/mp4"/>
                    </video> 

                    <div className={`${styles.slide_content} container`}>
                      <h1>Kimetsu no Yaiba</h1>
                      <div className={styles.anime_detail}>
                        <div className={styles.anime_item}>
                            <span>TV</span>
                        </div>
                        <div className={styles.anime_item}>
                            <span>24m</span>
                        </div>
                        <div className={styles.anime_item}>
                            <span>2019</span>
                        </div> 
                        
                        <div className={styles.anime_tag_quality}>
                            <span>FULLHD</span>
                        </div>

                        <div className={styles.anime_tag_dub}>
                            <span>LEG</span>
                        </div>
                      </div>
                      <p>
                        Desde a morte de seu pai, o fardo de sustentar a família recai sobre os ombros de Tanjirou Kamado. Apesar de viver na pobreza em uma montanha remota, a família Kamado pode desfrutar de uma vida relativamente tranquila e feliz.
                      </p> 

                      <div className={styles.buttons}>
                        <button className="primary">Assistir agora</button>
                        <button className="secondary">Detalhes</button>
                      </div>
                  </div>
                  
                  <div className={styles.overlay}></div>
                </SwiperSlide> 
              </Swiper> 
          </section>
        </div>
    )
}