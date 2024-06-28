using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iStartWeb.Models
{
    public class ClsRegister
    {
        public Int32 Id { get; set; }
        public String Name { get; set; }
        public String EmailId { get; set; }
        public String Gender { get; set; }
        public String Password { get; set; }
        public String ReEnterPassword { get; set; }
        public String Dml_Indicator { get; set; }
    }
}