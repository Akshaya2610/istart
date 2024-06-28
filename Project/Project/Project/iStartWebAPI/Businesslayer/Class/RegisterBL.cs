using Businesslayer.Interfaces;
using DataAccessLayer.Class;
using DataAccessLayer.Interfaces;
using DBModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businesslayer.Class
{
  public  class RegisterBL: IRegisterBL
    {
        IRegisterDAL objIDRegister = new RegisterDAL();

        public DataSet Register_Ins_upd_sel(ClsRegister ObjclsRegister)
        {
            return objIDRegister.Register_Ins_upd_sel(ObjclsRegister);
        }
    }
}
