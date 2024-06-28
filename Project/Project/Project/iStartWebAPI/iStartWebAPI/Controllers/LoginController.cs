using Businesslayer.Class;
using Businesslayer.Interfaces;
using DBModel;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace iStartWebAPI.Controllers
{
    public class LoginController : ApiController
    {
        IRegisterBL objRegister;
        DataTable objDataTable;
        DataSet objDataset;

        HttpResponseMessage response;
       // log4net.ILog logger = log4net.LogManager.GetLogger(typeof(TPAController));

       // [Authorize]
        [HttpPost]
        [ActionName("Register")]
        public HttpResponseMessage Register_Ins_upd_sel(ClsRegister objclsRegister)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    objRegister = new RegisterBL();
                    objDataset = new DataSet();
                    objDataset = objRegister.Register_Ins_upd_sel(objclsRegister);

                    if (objDataset != null)
                    {
                        var json = JsonConvert.SerializeObject(new
                        {
                            status = true,
                            msg = "Success",
                            data = objDataset
                        });
                        JObject json1 = JObject.Parse(json);
                        return response = Request.CreateResponse(HttpStatusCode.OK, json1);

                    }
                    else
                    {
                        var json = JsonConvert.SerializeObject(new
                        {
                            status = false,
                            msg = "Invalid data",
                            data = "Records Not Found"
                        });
                        JObject json1 = JObject.Parse(json);
                        return response = Request.CreateResponse(HttpStatusCode.NotFound, json1);

                    }

                }
                catch (Exception objException)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, objException.Message);
                }
            }
            else
            {
                var json = JsonConvert.SerializeObject(new
                {
                    status = false,
                    msg = "Invalid ModelState",
                    data = ModelState.Values.Select(e => e.Errors).ToList()
                });
                JObject json1 = JObject.Parse(json);
                var message = string.Join(" | ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage));
                var exception = string.Join(" | ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.Exception));
               // logger.ErrorFormat(string.Format("Exception:{0},Error:{1},MethodName={2}", exception, message, "TPA"));
                return response = Request.CreateResponse(HttpStatusCode.BadRequest, json1);

            }

        }
    }
}
