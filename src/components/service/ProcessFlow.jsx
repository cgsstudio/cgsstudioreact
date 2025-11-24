import React from 'react';

const ProcessFlow = () => {
  const processSteps = [
    {
      icon: "bi bi-calendar3",
      title: "Planning",
      description: "We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey."
    },
    {
      icon: "bi bi-brush",
      title: "Design",
      description: "After creating a solid user experience and website flow with wireframes, we develop the visual design of your website's appearance and feel."
    },
    {
      icon: "bi bi-code-slash",
      title: "Development",
      description: "After that, our talented developers add the material to the website, make sure it is mobile-friendly, and bring your designs to life."
    },
    {
      icon: "bi bi-file-earmark-check",
      title: "Testing",
      description: "Our web development company is different in that we test everything thoroughly to make sure there are no issues before anything becomes accessible to all."
    }
  ];

  return (
    <>
      <style>
        {`
          .process-section {
            
            padding: 5rem 0;
          }
          .icon-container {
            width: 70px;
            height: 70px;
            background-color: #e84c3d;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            position: relative;
          }
          .text-box {
            border: 1px solid #ccc;
            padding: 1rem;
            border-radius: 8px;
            text-align: left;
            min-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text-box h5 {
            color: #333;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          .text-box p {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.5;
          }
          .step:not(:last-child) .icon-container::after {
            content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 100 20"><path d="M 0 10 L 80 10 M 80 10 L 70 5 M 80 10 L 70 15" stroke="%23aaa" stroke-width="2" fill="none"/></svg>');
            position: absolute;
            top: 50%;
            right: -60px;
            transform: translateY(-50%);
            width: 60px;
            height: 20px;
            z-index: 1;
          }
          @media (max-width: 991.98px) {
            .step:not(:last-child) .icon-container::after {
              content: none;
            }
            .text-box {
              min-height: auto;
            }
          }
        `}
      </style>
      <section className="process-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Bespoke Website Development Company in Ahmedabad</h2>
          </div>
          <div className="row text-center justify-content-center">
            {processSteps.map((step, index) => (
              <div className="col-lg-3 col-md-6 mb-4 step" key={index}>
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-container">
                    <i className={step.icon}></i>
                  </div>
                  <div className="text-box w-100">
                    <h5 className="fw-bold">{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessFlow;