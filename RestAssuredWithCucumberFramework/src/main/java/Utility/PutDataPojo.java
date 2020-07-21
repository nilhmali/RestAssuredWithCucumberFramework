package Utility;

public class PutDataPojo {
	// Pojo -Plain old javaobject

	String name;
	String job;

	public PutDataPojo() {

	}

	public PutDataPojo(String name, String job) {
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
