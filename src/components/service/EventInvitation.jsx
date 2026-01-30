import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import EventInvitationdetail from "../../components/service/EventInvitationdetail";

function EventInvitation() {

  return (
    <>
      <Helmet>
        <title>Event Invitation Design Services in Ahmedabad | Event Invitation Design India</title>
        <meta name="description" content="Chameleo GFX Studio offers premium event invitation design services in Ahmedabad, India. We create stylish, unique invitations tailored to your event’s theme and needs." />
        <meta name="keywords" content="Chameleo GFX Studio, Event Invitation Design, Custom Invitations, Ahmedabad Invitation Design, Stylish Invitations, Personalized Event Invitations, Wedding Invitations, Party Invitations, Creative Invitation Design, Event Card Design, Graphic Design India" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/event-invitation-design-ahmedabad"
        />
      </Helmet>
      <BreadCrumb title="Event Invitation Design" breadcrumbTitle="Event Invitation Design in Ahmedabad" />
      <EventInvitationdetail />

    </>
  );
}

export default EventInvitation;
