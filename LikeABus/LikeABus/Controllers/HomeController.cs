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
            ViewBag.Message = "Comments here";

            return View();
        }

        public ActionResult Location()
        {
            return View();
        }
    }
}