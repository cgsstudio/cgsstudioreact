import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import EventInvitationdetail from "../../components/service/EventInvitationdetail";

function EventInvitation() {

  return (
    <>
      <Helmet>
        <title>Event Invitation Design Services in Ahmedabad | Event Invitation Design India</title>s
        <meta name="description" content="Chameleo GFX Studio offers premium event invitation design services in Ahmedabad, India. We create stylish, unique invitations tailored to your event’s theme and needs." />
        <meta name="keywords" content="Chameleo GFX Studio, Event Invitation Design, Custom Invitations, Ahmedabad Invitation Design, Stylish Invitations, Personalized Event Invitations, Wedding Invitations, Party Invitations, Creative Invitation Design, Event Card Design, Graphic Design India" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/graphic-design/event-invitation-design-company"
        />
      </Helmet>
      <BreadCrumb title="Event Invitation Design Company in Ahmedabad, India" breadcrumbTitle="Event Invitation Design Company in Ahmedabad, India" />
      <EventInvitationdetail />

    </>
  );
}

export default EventInvitation;
