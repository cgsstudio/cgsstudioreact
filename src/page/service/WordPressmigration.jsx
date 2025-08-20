import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  WordPressmigrationdetail from "../../components/service/WordPressmigrationdetail";

function WordPressmigration() {
    
  return (
    <>
    <Helmet>
            <title>WordPress Migration and Upgrades in Ahmedabad | WordPress Migration and Upgrades in India</title>
            <meta name="description" content="Chameleo GFX Studio provides seamless WordPress migration and upgrades in Ahmedabad & India. Secure, fast, and hassle-free website transitions." />
			      <meta name="keywords" content="Chameleo GFX Studio, WordPress migration Ahmedabad, WordPress upgrades India, website migration services, WordPress transfer India, upgrade WordPress site, WordPress migration experts, secure site migration, WordPress version upgrade, migrate WordPress India" />
            <link 
          rel="canonical" 
          href="/wordpress-migration-and-upgrades" 
        />
        </Helmet>
      <BreadCrumb title="WordPress Migration and Upgrades" />
      <WordPressmigrationdetail />

    </>
  );
}

export default WordPressmigration;
