package Utility;

public class PostDataPojo {
	// Pojo -Plain old javaobject

	String name;
	String job;

	public PostDataPojo() {

	}

	public PostDataPojo(String name, String job) {
		this.name = name;
		this.job = job;
	}

	// Getter and setter method
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

}