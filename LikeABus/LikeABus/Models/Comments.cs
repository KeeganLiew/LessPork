using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LikeABus.Models
{
    public class Comments
    {
        public string comment { get; set; }
        public string time { get; set; }
        public string rating { get; set; }
        public string busID { get; set; }
        public string busRoute { get; set; }
    }
}