using iStartWeb.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Mvc;


namespace iStartWeb.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoginPage()
        {
            return View();
        }
        public ActionResult HomePage()
        {
            return View();
        }
        public ActionResult RegisterPage()
        {
            return View();
        }
        HttpClient objHttpClient;
        HttpResponseMessage objresponseMessage;
        public static String objWebApiUrl = ConfigurationManager.AppSettings["WEBAPIURL"].ToString();
        public LoginController()
        {
            objHttpClient = new HttpClient();

            objHttpClient.DefaultRequestHeaders.Accept.Clear();
            objHttpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));


        }
        public JsonResult insert_update_deleteRegister(ClsRegister objclsRegister)
        {
            try
            {
                if (ModelState.IsValid)
                {


                    objresponseMessage = objHttpClient.PostAsJsonAsync(objWebApiUrl + "Login/Register", objclsRegister).Result;
                    var MasterServiceType = objresponseMessage.Content.ReadAsStringAsync().Result;
                    return Json(MasterServiceType, JsonRequestBehavior.AllowGet);
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
                    //logger.ErrorFormat(string.Format("Exception:{0},Error:{1},MethodName={2}", exception, message, "insert_update_deleteTPA"));
                    return Json(json1, JsonRequestBehavior.AllowGet);

                }

            }
            catch (Exception objException)
            {
                //logger.ErrorFormat(string.Format("Module:{0},Error:{0}", "insert_update_deleteRegister", objException.Message));
            }
            return Json(new EmptyResult(), JsonRequestBehavior.AllowGet);

        }
        public string LoginSession(ClsRegister objclsRegister)
        {
            Session["UserId"] = objclsRegister.Id;

            HttpCookie Userdetails = new HttpCookie("Userdetails");
            Userdetails["UserDetailsId"] = objclsRegister.Id.ToString();
            Userdetails.Expires = DateTime.Now.AddMonths(1);
            Response.Cookies.Add(Userdetails);

            return objclsRegister.Id.ToString();
        }
    }
    }