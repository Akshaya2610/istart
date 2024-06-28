using DBModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
   public interface IRegisterDAL
    {
         DataSet Register_Ins_upd_sel(ClsRegister ObjclsRegister);
    }
}
