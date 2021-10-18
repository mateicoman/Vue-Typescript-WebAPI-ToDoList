using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoAPI.Models
{
	public class Item
	{
		public long ID { get; set; }
		public string Name { get; set; }
		public bool IsComplete { get; set; }
	}
}
