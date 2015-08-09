using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LikeABus.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FeedBack()
        {
            //ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Comments()
        {
            ViewBag.Message = "Your comment";
            return View();
        }

        public ActionResult Selection()
        {
            ViewBag.Message = "Selection here";
            //return new FilePathResult("index.html", "text/html");
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public JsonResult WriteXML(Models.Comments model)
        {
            Models.Comments newComment = new Models.Comments();
            newComment.comment = model.comment;
            newComment.time = model.time;
            newComment.rating = model.rating;
            newComment.busID = model.busID;
            newComment.busRoute = model.busRoute;
            //newComment.rating = DateTime.Now.ToString("yy:mm:dd:hh:mm:ss");

            System.Xml.Serialization.XmlSerializer writer = new System.Xml.Serialization.XmlSerializer(typeof(Models.Comments));
            //string folderPath = @"C:\TEMP";
            //string filePath = @"C:\TEMP\commentFile.xml";
            string filePath = Server.MapPath(Url.Content("~/Content/cFile.xml"));

            System.IO.FileStream file = System.IO.File.Create(filePath);
            writer.Serialize(file, newComment);
            file.Close();

            bool fileExists = System.IO.File.Exists(filePath);
            if (fileExists)
            {
                JsonResult returnJson = Json(new { success = true }, JsonRequestBehavior.AllowGet);
                return returnJson;
            }
            else
            {
                return null;
            }

        }
    }
}