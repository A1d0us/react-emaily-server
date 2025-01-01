const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
  constructor({subject, recipients}, content) {
    super();

    this.sgApi = sendgrid(process.env.SENDGRID_KEY);
    this.from_email = new helper.Email(process.env.SENDGRID_SENDER_EMAIL);
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(addresses) {
    return addresses.map(({email}) => new helper.Email(email));
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalization = new helper.Personalization();
    this.recipients.forEach(recipient => personalization.addTo(recipient));
    this.addPersonalization(personalization);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });

    return await this.sgApi.API(request);
  }
}

module.exports = Mailer;