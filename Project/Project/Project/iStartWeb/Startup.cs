using Microsoft.Owin;
using Owin;

//[assembly: OwinStartupAttribute(typeof(iStartWeb.Startup))]
[assembly: OwinStartupAttribute("iStartWebConfig", typeof(iStartWeb.Startup))]

namespace iStartWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
