import { theme } from "@boilerplate/shared/theme";

export const text = ({ url, site }: { url: string; site: string }) => `Sign in to ${site}\n${url}\n\n`;

export const html = ({ url }: { url: string }) => {
  // TODO: check user theme preference / update for i18n when NextAuth supports it
  const primary200 = theme.colors.primary[200];

  return `
<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title> </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->

    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>

    <style type="text/css">
      @media only screen and (max-width: 480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      .link {
        color: red !important;
        text-decoration: underline !important;
      }
    </style>
  </head>
  <body style="word-spacing: normal; background-color: #111827">
    <div style="background-color: #111827">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div style="margin: 0px auto; max-width: 600px">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%">
          <tbody>
            <tr>
              <td style="direction: ltr; font-size: 0px; padding: 20px 0; text-align: center">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="border-collapse: collapse; border-spacing: 0px"
                          >
                            <tbody>
                              <tr>
                                <td style="width: 200px">
                                  <img
                                    height="auto"
                                    src="http://placekitten.com/200/150"
                                    style="
                                      border: 0;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="200"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
        style="
          background: rgba(255, 255, 255, 0.04);
          background-color: rgba(255, 255, 255, 0.04);
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: rgba(255, 255, 255, 0.04); background-color: rgba(255, 255, 255, 0.04); width: 100%"
        >
          <tbody>
            <tr>
              <td style="direction: ltr; font-size: 0px; padding: 20px 0; text-align: center">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <div
                            style="
                              font-family: Inter, Arial;
                              font-size: 18px;
                              line-height: 1;
                              text-align: center;
                              color: #ffffff;
                            "
                          >
                            <h3>Click the button below to sign in to Boilerplate.</h3>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <div
                            style="
                              font-family: Inter, Arial;
                              font-size: 12px;
                              line-height: 1;
                              text-align: center;
                              color: #ffffff;
                            "
                          >
                            The link can only be used once.
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="center"
                          vertical-align="middle"
                          style="font-size: 0px; padding: 10px 25px; word-break: break-word"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="border-collapse: separate; line-height: 100%"
                          >
                            <tr>
                              <td
                                align="center"
                                bgcolor="${primary200}"
                                role="presentation"
                                style="
                                  border: none;
                                  border-radius: 3px;
                                  cursor: auto;
                                  mso-padding-alt: 10px 25px;
                                  background: ${primary200};
                                "
                                valign="middle"
                              >
                                <a
                                  style="
                                    display: inline-block;
                                    background: ${primary200};
                                    color: #111827;
                                    font-family: Inter, Arial;
                                    font-size: 13px;
                                    font-weight: normal;
                                    line-height: 120%;
                                    margin: 0;
                                    text-decoration: none;
                                    text-transform: none;
                                    padding: 10px 25px;
                                    mso-padding-alt: 0px;
                                    border-radius: 3px;
                                    href="${url}"
                                  "
                                >
                                  Sign in
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <div
                            style="
                              font-family: Inter, Arial;
                              font-size: 12px;
                              line-height: 1;
                              text-align: center;
                              color: #ffffff;
                            "
                          >
                            Or sign in using this link:
                            <a
                              style="text-decoration: none; color: rgba(255, 255, 255, 0.64)"
                              href="${url}"
                              target="_blank"
                              >${url}</a
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div style="margin: 0px auto; max-width: 600px">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%">
          <tbody>
            <tr>
              <td style="direction: ltr; font-size: 0px; padding: 20px 0; text-align: center">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <div
                            style="
                              font-family: Inter, Arial;
                              font-size: 12px;
                              line-height: 1;
                              text-align: center;
                              color: rgba(255, 255, 255, 0.64);
                            "
                          >
                            If you did not request this email you can safely ignore it.
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td align="center" style="font-size: 0px; padding: 10px 25px; word-break: break-word">
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="float: none; display: inline-table"
                          >
                            <tr>
                              <td style="padding: 4px; vertical-align: middle">
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="background: #000000; border-radius: 3px; width: 24px"
                                >
                                  <tr>
                                    <td style="font-size: 0; height: 24px; vertical-align: middle; width: 24px">
                                      <a href="https://github.com/amosbastian/boilerplate" target="_blank">
                                        <img
                                          height="24"
                                          src="https://www.mailjet.com/images/theme/v1/icons/ico-social/github.png"
                                          style="border-radius: 3px; display: block"
                                          width="24"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]></td><td><![endif]-->
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="float: none; display: inline-table"
                          >
                            <tr>
                              <td style="padding: 4px; vertical-align: middle">
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="background: #55acee; border-radius: 3px; width: 24px"
                                >
                                  <tr>
                                    <td style="font-size: 0; height: 24px; vertical-align: middle; width: 24px">
                                      <a
                                        href="https://twitter.com/intent/tweet?url=https://twitter.com/amosbastian"
                                        target="_blank"
                                      >
                                        <img
                                          height="24"
                                          src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png"
                                          style="border-radius: 3px; display: block"
                                          width="24"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]></td><td><![endif]-->
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="float: none; display: inline-table"
                          >
                            <tr>
                              <td style="padding: 4px; vertical-align: middle">
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="background: #3f729b; border-radius: 3px; width: 24px"
                                >
                                  <tr>
                                    <td style="font-size: 0; height: 24px; vertical-align: middle; width: 24px">
                                      <a href="https://www.instagram.com/amosbastian" target="_blank">
                                        <img
                                          height="24"
                                          src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png"
                                          style="border-radius: 3px; display: block"
                                          width="24"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]></td><td><![endif]-->
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="float: none; display: inline-table"
                          >
                            <tr>
                              <td style="padding: 4px; vertical-align: middle">
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="background: #0077b5; border-radius: 3px; width: 24px"
                                >
                                  <tr>
                                    <td style="font-size: 0; height: 24px; vertical-align: middle; width: 24px">
                                      <a
                                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://linkedin.com/in/amosbastian&title=&summary=&source="
                                        target="_blank"
                                      >
                                        <img
                                          height="24"
                                          src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png"
                                          style="border-radius: 3px; display: block"
                                          width="24"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
</html>
`;
};
