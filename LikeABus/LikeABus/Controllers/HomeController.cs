﻿using System;
using System.Collections.Generic;
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
            return View();
        }

        public ActionResult Selection()
        {
            ViewBag.Message = "Selection here";
            //return new FilePathResult("index.html", "text/html");
            return View();
        }
    }
}