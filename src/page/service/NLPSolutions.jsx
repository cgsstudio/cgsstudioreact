import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import NLPDetails from "../../components/service/NLPDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function NLPSolutions() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>NLP (Natural Language Processing) Solutions | Chameleo GFX Studio</title>
        <meta name="description" content="AI NLP Solutions in Ahmedabad. We build systems that understand, interpret, and generate human language to unlock value from your text data." />
        <meta name="keywords" content="NLP Solutions, Natural Language Processing, Text Analytics, LLM, Chatbots, Ahmedabad AI Solutions" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/nlp-natural-language-processing-solutions" />
      </Helmet>
      <ServiceHeroBanner
        title="NLP (Natural Language Processing) Solutions"
        breadcrumbTitle="NLP Solutions"
        subtitle="Teaching Machines to Understand People — Not Just Words"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <NLPDetails />
      </div>
    </>
  );
}

export default NLPSolutions;
