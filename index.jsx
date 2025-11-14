import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "../components/Menu/Badge"
import Banner from "../components/Menu/Banner"
import Testimonial from "./components/Testimonial/index"
import Card from "./components/Card/Card"

function App() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
  
  return (
    <div className="App" style={{background: "#e5e7eb", minHeight: "100vh", padding: "40px"}}>
     <header className="header">
    <h1>COMPONENT LIBRARY</h1>
    </header>
    
  
    {/* ---- Badges ---- */}
     <div>
        <h2 className="section-title">BADGES</h2>
         
        <div className="badges-container">
        <h4 className="section-form-square">SQUARE</h4>
        {colors.map((color)=><Badge 
           className="badge-square" color={color} key={`${color}-square`} shape="square"/>)}
        </div>
        
       
        <div className="badges-container">
        <h4 className="section-form-pill">PILL</h4>
        {colors.map((color)=><Badge 
             className="badge-pill" color={color} key={`${color}-pill`} shape="pill"/>)}
        </div>
        </div>
   
  {/* ---- Banner ---- */}
    <div>
      <h2 className="section-title">BANNERS</h2>
     <div className="banner-container">
      <h4 className="section-form-square">Multi-line</h4>
    <Banner
        type="success"
        variant="multiline"
        title="Congratulations!"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banner
        type="warning"
        variant="multiline"
        title="Attention"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam."
      />
      <Banner
        type="error"
        variant="multiline"
        title="There is a problem with your application"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banner
        type="neutral"
        variant="multiline"
        title="Update available"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      </div>
      
      <div className="banner-container">
      <h4 className="section-form-square">Single-line</h4>
        <Banner type="success" variant="singleline" title="Congratulations!" />
      <Banner type="warning" variant="singleline" title="Attention" />
      <Banner type="error" variant="singleline" title="There is a problem with your application" />
      <Banner type="neutral" variant="singleline" title="Update available" />
      </div>
    </div>

    
     {/* ---- Testimonial ---- */}
     <h2 className="section-title">TESTIMONIAL</h2>
            <Testimonial> 
                <Testimonial.Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Testimonial.Content> 
                    <Testimonial.Text>
                        Anuj Maurya, A Software Engineer and Web Developer. This is custom testinonial. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </Testimonial.Text>
                    <Testimonial.Name>
                        Anuj Kumar Maurya
                    </Testimonial.Name> 
                    <Testimonial.Role>
                        Founder & CEO / Reusico
                    </Testimonial.Role>
                </Testimonial.Content>
            </Testimonial>
    
    
    <Testimonial> 
        <Testimonial.Image />
        <Testimonial.Content> 
        <Testimonial.Text/>
        <Testimonial.Name />
        <Testimonial.Role />
        </Testimonial.Content>
    </Testimonial>
    
     {/* ---- Cards ---- */}
    <h2 className="section-title">CARDS</h2>

<div className="card-wrapper">
  <Card />
  <Card 
    title="This is custom title"
    icon={{
      src: "https://cdn-icons-png.freepik.com/256/7546/7546329.png?ga=GA1.1.1171956101.1729056429&semt=ais_hybrid",
      size: 38,
      backgroundColor: "#F5F5F5",
    }}
  >
    Cards Icon could be changed, Title is customizable and also these body text. A click event also can be added.
  </Card>
</div>

      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  