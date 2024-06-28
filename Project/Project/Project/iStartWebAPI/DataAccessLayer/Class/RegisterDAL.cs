using DataAccessLayer.Interfaces;
using DBLibrary;
using DBModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Class
{
  public  class RegisterDAL : IRegisterDAL
    {
        //DBCon objDBCon = new DBCon();
        DataTable objDataTable;
        DataSet objDataset;
        DBCon objDBLibrary;
        SqlParameter[] objSqlParameter;
        public DataSet Register_Ins_upd_sel(ClsRegister ObjclsRegister)
        {
            try
            {
                objDataset = new DataSet();
                objDBLibrary = new DBCon();
                objDBLibrary._stringCommandText = "Sp_RegisterUser";
                objDBLibrary._CommandType = CommandType.StoredProcedure;
                objSqlParameter = new SqlParameter[6];
                objSqlParameter[0] = new SqlParameter("@Dml_Indicator", SqlDbType.VarChar, 30);
                objSqlParameter[0].Value = ObjclsRegister.Dml_Indicator;

                objSqlParameter[1] = new SqlParameter("@Id", DbType.Int32);
                objSqlParameter[1].Value = ObjclsRegister.Id;

                objSqlParameter[2] = new SqlParameter("@Name", DbType.String);
                objSqlParameter[2].Value = ObjclsRegister.Name;

                objSqlParameter[3] = new SqlParameter("@EmailId", DbType.String);
                objSqlParameter[3].Value = ObjclsRegister.EmailId;

                objSqlParameter[4] = new SqlParameter("@Gender", DbType.Int32);
                objSqlParameter[4].Value = ObjclsRegister.Gender;

                objSqlParameter[5] = new SqlParameter("@Password", DbType.String);
                objSqlParameter[5].Value = ObjclsRegister.Password;
       
                objDataset = objDBLibrary.GetDataAdapter(objSqlParameter);
                if (objDataset != null)
                {
                    return objDataset;
                }
            }
            catch (Exception objException)
            {
                Exception objErr = objException.GetBaseException();
                //logger.ErrorFormat(string.Format("Error:{0},MethodName={1},DML_Indicator={2}", objErr, "sp_tba", ObjclsRegister.Dml_Indicator));
            }
            return objDataset;
        }
    }
}
