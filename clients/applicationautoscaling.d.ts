import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ApplicationAutoScaling extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApplicationAutoScaling.Types.ClientConfiguration)
  config: Config & ApplicationAutoScaling.Types.ClientConfiguration;
  /**
   * Deletes the specified scaling policy for an Application Auto Scaling scalable target. Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. For more information, see Delete a Step Scaling Policy and Delete a Target Tracking Scaling Policy in the Application Auto Scaling User Guide.
   */
  deleteScalingPolicy(params: ApplicationAutoScaling.Types.DeleteScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deletes the specified scaling policy for an Application Auto Scaling scalable target. Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. For more information, see Delete a Step Scaling Policy and Delete a Target Tracking Scaling Policy in the Application Auto Scaling User Guide.
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deletes the specified scheduled action for an Application Auto Scaling scalable target. For more information, see Delete a Scheduled Action in the Application Auto Scaling User Guide.
   */
  deleteScheduledAction(params: ApplicationAutoScaling.Types.DeleteScheduledActionRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScheduledActionResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScheduledActionResponse, AWSError>;
  /**
   * Deletes the specified scheduled action for an Application Auto Scaling scalable target. For more information, see Delete a Scheduled Action in the Application Auto Scaling User Guide.
   */
  deleteScheduledAction(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScheduledActionResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScheduledActionResponse, AWSError>;
  /**
   * Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use DescribeScalableTargets.   Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it. 
   */
  deregisterScalableTarget(params: ApplicationAutoScaling.Types.DeregisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use DescribeScalableTargets.   Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it. 
   */
  deregisterScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Gets information about the scalable targets in the specified namespace. You can filter the results using ResourceIds and ScalableDimension.
   */
  describeScalableTargets(params: ApplicationAutoScaling.Types.DescribeScalableTargetsRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Gets information about the scalable targets in the specified namespace. You can filter the results using ResourceIds and ScalableDimension.
   */
  describeScalableTargets(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks. You can filter the results using ResourceId and ScalableDimension.
   */
  describeScalingActivities(params: ApplicationAutoScaling.Types.DescribeScalingActivitiesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks. You can filter the results using ResourceId and ScalableDimension.
   */
  describeScalingActivities(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Describes the Application Auto Scaling scaling policies for the specified service namespace. You can filter the results using ResourceId, ScalableDimension, and PolicyNames. For more information, see Target Tracking Scaling Policies and Step Scaling Policies in the Application Auto Scaling User Guide.
   */
  describeScalingPolicies(params: ApplicationAutoScaling.Types.DescribeScalingPoliciesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Describes the Application Auto Scaling scaling policies for the specified service namespace. You can filter the results using ResourceId, ScalableDimension, and PolicyNames. For more information, see Target Tracking Scaling Policies and Step Scaling Policies in the Application Auto Scaling User Guide.
   */
  describeScalingPolicies(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Describes the Application Auto Scaling scheduled actions for the specified service namespace. You can filter the results using the ResourceId, ScalableDimension, and ScheduledActionNames parameters. For more information, see Scheduled Scaling in the Application Auto Scaling User Guide.
   */
  describeScheduledActions(params: ApplicationAutoScaling.Types.DescribeScheduledActionsRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScheduledActionsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScheduledActionsResponse, AWSError>;
  /**
   * Describes the Application Auto Scaling scheduled actions for the specified service namespace. You can filter the results using the ResourceId, ScalableDimension, and ScheduledActionNames parameters. For more information, see Scheduled Scaling in the Application Auto Scaling User Guide.
   */
  describeScheduledActions(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScheduledActionsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScheduledActionsResponse, AWSError>;
  /**
   * Creates or updates a scaling policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target. Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30.  We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again.  For more information, see Target Tracking Scaling Policies and Step Scaling Policies in the Application Auto Scaling User Guide.  If a scalable target is deregistered, the scalable target is no longer available to execute scaling policies. Any scaling policies that were specified for the scalable target are deleted. 
   */
  putScalingPolicy(params: ApplicationAutoScaling.Types.PutScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Creates or updates a scaling policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target. Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30.  We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again.  For more information, see Target Tracking Scaling Policies and Step Scaling Policies in the Application Auto Scaling User Guide.  If a scalable target is deregistered, the scalable target is no longer available to execute scaling policies. Any scaling policies that were specified for the scalable target are deleted. 
   */
  putScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Creates or updates a scheduled action for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target. When start and end times are specified with a recurring schedule using a cron expression or rates, they form the boundaries of when the recurring action starts and stops. To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted. For more information, see Scheduled Scaling in the Application Auto Scaling User Guide.  If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted. 
   */
  putScheduledAction(params: ApplicationAutoScaling.Types.PutScheduledActionRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScheduledActionResponse) => void): Request<ApplicationAutoScaling.Types.PutScheduledActionResponse, AWSError>;
  /**
   * Creates or updates a scheduled action for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target. When start and end times are specified with a recurring schedule using a cron expression or rates, they form the boundaries of when the recurring action starts and stops. To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted. For more information, see Scheduled Scaling in the Application Auto Scaling User Guide.  If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted. 
   */
  putScheduledAction(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScheduledActionResponse) => void): Request<ApplicationAutoScaling.Types.PutScheduledActionResponse, AWSError>;
  /**
   * Registers or updates a scalable target.  A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace.  When you register a new scalable target, you must specify values for minimum and maximum capacity. Application Auto Scaling scaling policies will not scale capacity to values that are outside of this range. After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use DescribeScalableTargets. You can also view the scaling policies for a service namespace by using DescribeScalableTargets. If you no longer need a scalable target, you can deregister it by using DeregisterScalableTarget. To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. 
   */
  registerScalableTarget(params: ApplicationAutoScaling.Types.RegisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
  /**
   * Registers or updates a scalable target.  A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace.  When you register a new scalable target, you must specify values for minimum and maximum capacity. Application Auto Scaling scaling policies will not scale capacity to values that are outside of this range. After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use DescribeScalableTargets. You can also view the scaling policies for a service namespace by using DescribeScalableTargets. If you no longer need a scalable target, you can deregister it by using DeregisterScalableTarget. To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. 
   */
  registerScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
}
declare namespace ApplicationAutoScaling {
  export type AdjustmentType = "ChangeInCapacity"|"PercentChangeInCapacity"|"ExactCapacity"|string;
  export interface Alarm {
    /**
     * The name of the alarm.
     */
    AlarmName: ResourceId;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmARN: ResourceId;
  }
  export type Alarms = Alarm[];
  export type Cooldown = number;
  export interface CustomizedMetricSpecification {
    /**
     * The name of the metric. 
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: MetricNamespace;
    /**
     * The dimensions of the metric.  Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
     */
    Dimensions?: MetricDimensions;
    /**
     * The statistic of the metric.
     */
    Statistic: MetricStatistic;
    /**
     * The unit of the metric.
     */
    Unit?: MetricUnit;
  }
  export interface DeleteScalingPolicyRequest {
    /**
     * The name of the scaling policy.
     */
    PolicyName: ResourceIdMaxLen1600;
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeleteScalingPolicyResponse {
  }
  export interface DeleteScheduledActionRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The name of the scheduled action.
     */
    ScheduledActionName: ResourceIdMaxLen1600;
    /**
     * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeleteScheduledActionResponse {
  }
  export interface DeregisterScalableTargetRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeregisterScalableTargetResponse {
  }
  export interface DescribeScalableTargetsRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceIds?: ResourceIdsMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalableTargetsResponse {
    /**
     * The scalable targets that match the request parameters.
     */
    ScalableTargets?: ScalableTargets;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesResponse {
    /**
     * A list of scaling activity objects.
     */
    ScalingActivities?: ScalingActivities;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesRequest {
    /**
     * The names of the scaling policies to describe.
     */
    PolicyNames?: ResourceIdsMaxLen1600;
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesResponse {
    /**
     * Information about the scaling policies.
     */
    ScalingPolicies?: ScalingPolicies;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScheduledActionsRequest {
    /**
     * The names of the scheduled actions to describe.
     */
    ScheduledActionNames?: ResourceIdsMaxLen1600;
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scheduled action results. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScheduledActionsResponse {
    /**
     * Information about the scheduled actions.
     */
    ScheduledActions?: ScheduledActions;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export type DisableScaleIn = boolean;
  export type MaxResults = number;
  export type MetricAggregationType = "Average"|"Minimum"|"Maximum"|string;
  export interface MetricDimension {
    /**
     * The name of the dimension.
     */
    Name: MetricDimensionName;
    /**
     * The value of the dimension.
     */
    Value: MetricDimensionValue;
  }
  export type MetricDimensionName = string;
  export type MetricDimensionValue = string;
  export type MetricDimensions = MetricDimension[];
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricScale = number;
  export type MetricStatistic = "Average"|"Minimum"|"Maximum"|"SampleCount"|"Sum"|string;
  export type MetricType = "DynamoDBReadCapacityUtilization"|"DynamoDBWriteCapacityUtilization"|"ALBRequestCountPerTarget"|"RDSReaderAverageCPUUtilization"|"RDSReaderAverageDatabaseConnections"|"EC2SpotFleetRequestAverageCPUUtilization"|"EC2SpotFleetRequestAverageNetworkIn"|"EC2SpotFleetRequestAverageNetworkOut"|"SageMakerVariantInvocationsPerInstance"|"ECSServiceAverageCPUUtilization"|"ECSServiceAverageMemoryUtilization"|"AppStreamAverageCapacityUtilization"|"ComprehendInferenceUtilization"|"LambdaProvisionedConcurrencyUtilization"|"CassandraReadCapacityUtilization"|"CassandraWriteCapacityUtilization"|string;
  export type MetricUnit = string;
  export type MinAdjustmentMagnitude = number;
  export type PolicyName = string;
  export type PolicyType = "StepScaling"|"TargetTrackingScaling"|string;
  export interface PredefinedMetricSpecification {
    /**
     * The metric type. The ALBRequestCountPerTarget metric type applies only to Spot Fleet requests and ECS services.
     */
    PredefinedMetricType: MetricType;
    /**
     * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group attached to the Spot Fleet request or ECS service. Elastic Load Balancing sends data about your load balancers to Amazon CloudWatch. CloudWatch collects the data and specifies the format to use to access the data. The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:   app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN   targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.   To find the ARN for an Application Load Balancer, use the DescribeLoadBalancers API operation. To find the ARN for the target group, use the DescribeTargetGroups API operation.
     */
    ResourceLabel?: ResourceLabel;
  }
  export interface PutScalingPolicyRequest {
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The policy type. This parameter is required if you are creating a scaling policy. The following policy types are supported:   TargetTrackingScaling—Not supported for Amazon EMR  StepScaling—Not supported for DynamoDB, Amazon Comprehend, Lambda, or Amazon Keyspaces (for Apache Cassandra). For more information, see Target Tracking Scaling Policies and Step Scaling Policies in the Application Auto Scaling User Guide.
     */
    PolicyType?: PolicyType;
    /**
     * A step scaling policy. This parameter is required if you are creating a policy and the policy type is StepScaling.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    /**
     * A target tracking scaling policy. Includes support for predefined or customized metrics. This parameter is required if you are creating a policy and the policy type is TargetTrackingScaling.
     */
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
  }
  export interface PutScalingPolicyResponse {
    /**
     * The Amazon Resource Name (ARN) of the resulting scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
    /**
     * The CloudWatch alarms created for the target tracking scaling policy.
     */
    Alarms?: Alarms;
  }
  export interface PutScheduledActionRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The schedule for this action. The following formats are supported:   At expressions - "at(yyyy-mm-ddThh:mm:ss)"   Rate expressions - "rate(value unit)"   Cron expressions - "cron(fields)"   At expressions are useful for one-time schedules. Specify the time in UTC. For rate expressions, value is a positive integer and unit is minute | minutes | hour | hours | day | days. For more information about cron expressions, see Cron Expressions in the Amazon CloudWatch Events User Guide. For examples of using these expressions, see Scheduled Scaling in the Application Auto Scaling User Guide.
     */
    Schedule?: ResourceIdMaxLen1600;
    /**
     * The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target. 
     */
    ScheduledActionName: ScheduledActionName;
    /**
     * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The date and time for this scheduled action to start.
     */
    StartTime?: TimestampType;
    /**
     * The date and time for the recurring schedule to end.
     */
    EndTime?: TimestampType;
    /**
     * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
     */
    ScalableTargetAction?: ScalableTargetAction;
  }
  export interface PutScheduledActionResponse {
  }
  export interface RegisterScalableTargetRequest {
    /**
     * The namespace of the AWS service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.  This parameter is required if you are registering a scalable target. For certain resources, the minimum value allowed is 0. This includes Lambda provisioned concurrency, Spot Fleet, ECS services, Aurora DB clusters, EMR clusters, and custom resources. For all other resources, the minimum value allowed is 1.
     */
    MinCapacity?: ResourceCapacity;
    /**
     * The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.  This parameter is required if you are registering a scalable target.
     */
    MaxCapacity?: ResourceCapacity;
    /**
     * This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.  If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see Application Auto Scaling IAM Roles.
     */
    RoleARN?: ResourceIdMaxLen1600;
    /**
     * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities.   Suspension Outcomes    For DynamicScalingInSuspended, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.   For DynamicScalingOutSuspended, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.   For ScheduledScalingSuspended, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.    For more information, see Suspending and Resuming Scaling in the Application Auto Scaling User Guide.
     */
    SuspendedState?: SuspendedState;
  }
  export interface RegisterScalableTargetResponse {
  }
  export type ResourceCapacity = number;
  export type ResourceId = string;
  export type ResourceIdMaxLen1600 = string;
  export type ResourceIdsMaxLen1600 = ResourceIdMaxLen1600[];
  export type ResourceLabel = string;
  export type ScalableDimension = "ecs:service:DesiredCount"|"ec2:spot-fleet-request:TargetCapacity"|"elasticmapreduce:instancegroup:InstanceCount"|"appstream:fleet:DesiredCapacity"|"dynamodb:table:ReadCapacityUnits"|"dynamodb:table:WriteCapacityUnits"|"dynamodb:index:ReadCapacityUnits"|"dynamodb:index:WriteCapacityUnits"|"rds:cluster:ReadReplicaCount"|"sagemaker:variant:DesiredInstanceCount"|"custom-resource:ResourceType:Property"|"comprehend:document-classifier-endpoint:DesiredInferenceUnits"|"lambda:function:ProvisionedConcurrency"|"cassandra:table:ReadCapacityUnits"|"cassandra:table:WriteCapacityUnits"|string;
  export interface ScalableTarget {
    /**
     * The namespace of the AWS service that provides the resource, or a custom-resource.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value to scale to in response to a scale-in activity.
     */
    MinCapacity: ResourceCapacity;
    /**
     * The maximum value to scale to in response to a scale-out activity.
     */
    MaxCapacity: ResourceCapacity;
    /**
     * The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.
     */
    RoleARN: ResourceIdMaxLen1600;
    /**
     * The Unix timestamp for when the scalable target was created.
     */
    CreationTime: TimestampType;
    SuspendedState?: SuspendedState;
  }
  export interface ScalableTargetAction {
    /**
     * The minimum capacity. For Lambda provisioned concurrency, the minimum value allowed is 0. For all other resources, the minimum value allowed is 1.
     */
    MinCapacity?: ResourceCapacity;
    /**
     * The maximum capacity.
     */
    MaxCapacity?: ResourceCapacity;
  }
  export type ScalableTargets = ScalableTarget[];
  export type ScalingActivities = ScalingActivity[];
  export interface ScalingActivity {
    /**
     * The unique identifier of the scaling activity.
     */
    ActivityId: ResourceId;
    /**
     * The namespace of the AWS service that provides the resource, or a custom-resource.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * A simple description of what action the scaling activity intends to accomplish.
     */
    Description: XmlString;
    /**
     * A simple description of what caused the scaling activity to happen.
     */
    Cause: XmlString;
    /**
     * The Unix timestamp for when the scaling activity began.
     */
    StartTime: TimestampType;
    /**
     * The Unix timestamp for when the scaling activity ended.
     */
    EndTime?: TimestampType;
    /**
     * Indicates the status of the scaling activity.
     */
    StatusCode: ScalingActivityStatusCode;
    /**
     * A simple message about the current status of the scaling activity.
     */
    StatusMessage?: XmlString;
    /**
     * The details about the scaling activity.
     */
    Details?: XmlString;
  }
  export type ScalingActivityStatusCode = "Pending"|"InProgress"|"Successful"|"Overridden"|"Unfulfilled"|"Failed"|string;
  export type ScalingAdjustment = number;
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    /**
     * The Amazon Resource Name (ARN) of the scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The namespace of the AWS service that provides the resource, or a custom-resource.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The scaling policy type.
     */
    PolicyType: PolicyType;
    /**
     * A step scaling policy.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    /**
     * A target tracking scaling policy.
     */
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
    /**
     * The CloudWatch alarms associated with the scaling policy.
     */
    Alarms?: Alarms;
    /**
     * The Unix timestamp for when the scaling policy was created.
     */
    CreationTime: TimestampType;
  }
  export type ScalingSuspended = boolean;
  export interface ScheduledAction {
    /**
     * The name of the scheduled action.
     */
    ScheduledActionName: ScheduledActionName;
    /**
     * The Amazon Resource Name (ARN) of the scheduled action.
     */
    ScheduledActionARN: ResourceIdMaxLen1600;
    /**
     * The namespace of the AWS service that provides the resource, or a custom-resource.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The schedule for this action. The following formats are supported:   At expressions - "at(yyyy-mm-ddThh:mm:ss)"   Rate expressions - "rate(value unit)"   Cron expressions - "cron(fields)"   At expressions are useful for one-time schedules. Specify the time in UTC. For rate expressions, value is a positive integer and unit is minute | minutes | hour | hours | day | days. For more information about cron expressions, see Cron Expressions in the Amazon CloudWatch Events User Guide. For examples of using these expressions, see Scheduled Scaling in the Application Auto Scaling User Guide.
     */
    Schedule: ResourceIdMaxLen1600;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.   Amazon SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering.   Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.   Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE.   Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1.   Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.    sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an Amazon SageMaker model endpoint variant.    custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service.    comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint.    lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function.    cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table.    cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The date and time that the action is scheduled to begin.
     */
    StartTime?: TimestampType;
    /**
     * The date and time that the action is scheduled to end.
     */
    EndTime?: TimestampType;
    /**
     * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
     */
    ScalableTargetAction?: ScalableTargetAction;
    /**
     * The date and time that the scheduled action was created.
     */
    CreationTime: TimestampType;
  }
  export type ScheduledActionName = string;
  export type ScheduledActions = ScheduledAction[];
  export type ServiceNamespace = "ecs"|"elasticmapreduce"|"ec2"|"appstream"|"dynamodb"|"rds"|"sagemaker"|"custom-resource"|"comprehend"|"lambda"|"cassandra"|string;
  export interface StepAdjustment {
    /**
     * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
     */
    MetricIntervalLowerBound?: MetricScale;
    /**
     * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity. The upper bound must be greater than the lower bound.
     */
    MetricIntervalUpperBound?: MetricScale;
    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. 
     */
    ScalingAdjustment: ScalingAdjustment;
  }
  export type StepAdjustments = StepAdjustment[];
  export interface StepScalingPolicyConfiguration {
    /**
     * Specifies whether the ScalingAdjustment value in a StepAdjustment is an absolute number or a percentage of the current capacity.   AdjustmentType is required if you are adding a new step scaling policy configuration.
     */
    AdjustmentType?: AdjustmentType;
    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach. At least one step adjustment is required if you are adding a new step scaling policy configuration.
     */
    StepAdjustments?: StepAdjustments;
    /**
     * The minimum value to scale by when scaling by percentages. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Application Auto Scaling scales out the service by 2 tasks. Valid only if the adjustment type is PercentChangeInCapacity. 
     */
    MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
    /**
     * The amount of time, in seconds, to wait for a previous scaling activity to take effect. With scale-out policies, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a step scaling policy, it starts to calculate the cooldown time. While the cooldown period is in effect, capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity. For example, when an alarm triggers a step scaling policy to increase the capacity by 2, the scaling activity completes successfully, and a cooldown period starts. If the alarm triggers again during the cooldown period but at a more aggressive step adjustment of 3, the previous increase of 2 is considered part of the current capacity. Therefore, only 1 is added to the capacity. With scale-in policies, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the cooldown period after a scale-in activity, Application Auto Scaling scales out the target immediately. In this case, the cooldown period for the scale-in activity stops and doesn't complete. Application Auto Scaling provides a default value of 300 for the following scalable targets:   ECS services   Spot Fleet requests   EMR clusters   AppStream 2.0 fleets   Aurora DB clusters   Amazon SageMaker endpoint variants   Custom resources   For all other scalable targets, the default value is 0:   DynamoDB tables   DynamoDB global secondary indexes   Amazon Comprehend document classification endpoints   Lambda provisioned concurrency   Amazon Keyspaces tables  
     */
    Cooldown?: Cooldown;
    /**
     * The aggregation type for the CloudWatch metrics. Valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average.
     */
    MetricAggregationType?: MetricAggregationType;
  }
  export interface SuspendedState {
    /**
     * Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to true if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is false. 
     */
    DynamicScalingInSuspended?: ScalingSuspended;
    /**
     * Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to true if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is false. 
     */
    DynamicScalingOutSuspended?: ScalingSuspended;
    /**
     * Whether scheduled scaling is suspended. Set the value to true if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is false. 
     */
    ScheduledScalingSuspended?: ScalingSuspended;
  }
  export interface TargetTrackingScalingPolicyConfiguration {
    /**
     * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
     */
    TargetValue: MetricScale;
    /**
     * A predefined metric. You can specify either a predefined metric or a customized metric.
     */
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    /**
     * A customized metric. You can specify either a predefined metric or a customized metric.
     */
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    /**
     * The amount of time, in seconds, to wait for a previous scale-out activity to take effect. With the scale-out cooldown period, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a target tracking scaling policy, it starts to calculate the cooldown time. While the scale-out cooldown period is in effect, the capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity. Application Auto Scaling provides a default value of 300 for the following scalable targets:   ECS services   Spot Fleet requests   EMR clusters   AppStream 2.0 fleets   Aurora DB clusters   Amazon SageMaker endpoint variants   Custom resources   For all other scalable targets, the default value is 0:   DynamoDB tables   DynamoDB global secondary indexes   Amazon Comprehend document classification endpoints   Lambda provisioned concurrency   Amazon Keyspaces tables  
     */
    ScaleOutCooldown?: Cooldown;
    /**
     * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. With the scale-in cooldown period, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the scale-in cooldown period, Application Auto Scaling scales out the target immediately. In this case, the scale-in cooldown period stops and doesn't complete. Application Auto Scaling provides a default value of 300 for the following scalable targets:   ECS services   Spot Fleet requests   EMR clusters   AppStream 2.0 fleets   Aurora DB clusters   Amazon SageMaker endpoint variants   Custom resources   For all other scalable targets, the default value is 0:   DynamoDB tables   DynamoDB global secondary indexes   Amazon Comprehend document classification endpoints   Lambda provisioned concurrency   Amazon Keyspaces tables  
     */
    ScaleInCooldown?: Cooldown;
    /**
     * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is false.
     */
    DisableScaleIn?: DisableScaleIn;
  }
  export type TimestampType = Date;
  export type XmlString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-02-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApplicationAutoScaling client.
   */
  export import Types = ApplicationAutoScaling;
}
export = ApplicationAutoScaling;
